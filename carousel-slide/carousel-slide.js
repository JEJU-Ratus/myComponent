// 슬라이드의 버튼 및 슬라이드들을 감싸고 있는 부모요소 선택
const buttons = document.querySelectorAll("[data-carousel-button]");
const slides = document.querySelector("[data-slides]");

// 슬라이드의 총 개수, 슬라이드의 너비, 슬라이드의 이동 속도, 슬라이드 시작 index를 설정.
const slideLen = slides.children.length;
const slideWidth = 100; // vw
const slideSpeed = 300; // ms
const startIndex = 1;
// 슬라이드들을 감싸는 부모요소의 전체 넓이 설정
slides.style.width = slideWidth * (slideLen + 2) + "vw";

// 첫번째 자식요소와 마지막 자식 요소를 복제
let firstChild = slides.firstElementChild;
let lastChild = slides.lastElementChild;
let clonedFirst = firstChild.cloneNode(true);
let clonedLast = lastChild.cloneNode(true);

// 복제한 첫번째 자식요소는 맨 뒤로, 마지막 자식요소는 맨 앞으로 삽입
slides.appendChild(clonedFirst);
slides.insertBefore(clonedLast, slides.firstElementChild);

// 초기 슬라이드 위치 고정
slides.style.transform = `translate3d(-${slideWidth * startIndex}vw,0px,0px)`;



buttons.forEach((button) => {
  button.addEventListener("click", () => {
    slides.style.transition = slideSpeed + "ms";

    // 버튼의 data-carousel-button 속성이 "next"이면 1, 아니면 -1을 offset으로 설정합니다.
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;

    // 현재 활성화된 슬라이드를 선택하고, 그 슬라이드의 인덱스를 찾습니다.
    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;

    // newIndex가 0 미만이면 마지막 슬라이드로, slideLen 이상이면 첫번째 슬라이드로 설정합니다.
    // 그 외의 경우에는 슬라이드를 이동합니다
    if (newIndex < 0) {
      newIndex = slideLen;
    } else if (newIndex >= (slideLen+ 1)) {
      // ㄴ> slideLen의 실제 개수.(복제된 dom 포함)
      slides.style.transform = `translate3d(-${slideWidth * newIndex}vw,0px,0px)`;
      newIndex = startIndex;
      setTimeout(()=>{
      slides.style.transition = "0ms";
      slides.style.transform = `translate3d(-${slideWidth * newIndex}vw,0px,0px)`;
      },slideSpeed);
    }else slides.style.transform = `translate3d(-${slideWidth * newIndex}vw,0px,0px)`;

    // 현재 슬라이드의 활성화를 해제하고, 새로운 슬라이드를 활성화합니다.
    activeSlide.removeAttribute("data-active");
    slides.children[newIndex].setAttribute("data-active", "true");
  });
});
