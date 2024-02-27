const dropdownTitle = document.querySelectorAll('.heading'),
dropdownBox = document.querySelectorAll('.dropdownBox'),
arrowIcons = document.querySelectorAll('.arrow-icon');

const firstQuestionHeight = dropdownTitle[0].nextElementSibling.getBoundingClientRect().height;
dropdownTitle[0].nextElementSibling.classList.add(`max-h-[${firstQuestionHeight + 'px'}]`)


let prevTargetHeight = firstQuestionHeight;

dropdownTitle.forEach(fho =>{
  fho.addEventListener('click',()=>{
    const targetBox = fho.nextElementSibling;
    const targetArrowIcon = fho.firstElementChild.children[1];

    let targetHeight = targetBox.firstElementChild.getBoundingClientRect().height;
    
    dropdownBox.forEach((box, index) => {
      if (box !== targetBox) {
        box.classList.remove(`max-h-[${prevTargetHeight+'px'}]`);
        box.classList.add('max-h-0');
        arrowIcons[index].classList.remove('rotate-[-180deg]');
        arrowIcons[index].classList.add('rotate-0');
      }
      })
      // 클릭된 드롭다운의 상태를 토글합니다.
      targetBox.classList.toggle('max-h-0');
      targetBox.classList.toggle(`max-h-[${targetHeight+'px'}]`);
      targetArrowIcon.classList.toggle('rotate-[-180deg]');
      targetArrowIcon.classList.toggle('rotate-0');
      
      prevTargetHeight = targetHeight;
    });
  })


