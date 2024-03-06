const dropdownTitle = document.querySelectorAll('.heading'),
dropdownBox = document.querySelectorAll('.dropdownBox');

let prevTargetHeight = 0;

dropdownTitle.forEach(fho =>{
  fho.addEventListener('click',()=>{
    const targetBox = fho.nextElementSibling;

    let targetHeight = targetBox.firstElementChild.getBoundingClientRect().height;
    
    dropdownBox.forEach((box) => {
      if (box !== targetBox) {
        box.classList.remove(`h-[${prevTargetHeight+'px'}]`);
        box.classList.add('h-0');

      }
      })
      // 클릭된 드롭다운의 상태를 토글합니다.
      targetBox.classList.toggle('h-0');
      targetBox.classList.toggle(`h-[${targetHeight+'px'}]`);
      
      prevTargetHeight = targetHeight;
    });
  })


