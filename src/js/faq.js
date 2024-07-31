import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import sprite from '../img/icons.svg'

function createSvgIcon(iconId) {
  return `
    <svg width="15px" height="7.5px" class="faq-svg">
      <use href="${sprite}#${iconId}"></use>
    </svg>
  `;
}

export function faqAccordion() {
  document.addEventListener("DOMContentLoaded", function () {
    new Accordion('.faq-accordion-container', {
      duration: 300,
      showMultiple: true,
      collapse: true
    });
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    const faqTriggers = document.querySelectorAll('.faq-trigger');

    faqTriggers.forEach(trigger => {
      trigger.insertAdjacentHTML('beforeend', createSvgIcon('icon-accordeon_svg_mobile-min'));

      trigger.addEventListener('click', function () {
        this.classList.toggle('is-active');
        
        const isActive = this.classList.contains('is-active');
        const iconId = isActive ? 'icon-accordeon_mobile_opened_svg-min' : 'icon-accordeon_svg_mobile-min';
        this.querySelector('.faq-svg').outerHTML = createSvgIcon(iconId);
        // const iconUrl = isActive ? `url("${sprite}#icon-accordeon_mobile_opened_svg-min")` : `url("${sprite}#icon-accordeon_svg_mobile-min")`;
        // this.style.setProperty('--faq-icon-url', iconUrl);
      });
    });
  });
}





// const newAcc = document.querySelector(".faq-accordion-container")
  
//   newAcc.addEventListener('click', e => {
//   const elem = e.target.closest('.faq-trigger');
//   const aboutMainDiv = elem.closest('.faq-item');
//   const linkSvgAcc = elem.querySelector('.faq-svg use');
//   const activeElem = elem.closest('.is-active');

//   if (aboutMainDiv && linkSvgAcc) {
//     const iconStan = activeElem ? '#icon-accordeon_mobile_opened_svg-min' : '#icon-accordeon_svg_mobile-min';
//     linkSvgAcc.setAttribute('href', `${Sprite}${iconStan}`);
//   }
// }); 



// // import iconURL from '../img/icons.svg';











//* ДРУГИЙ ВАРІАНТ КОДУ З ФУНКЦІЄЮ ЗМІНИ ІКОНКИ (стрілка додолу на стрілка догори) ПРИ КЛІКУ НА BUTTON*//
// export function faqAccordion() {
//   document.addEventListener("DOMContentLoaded", function () {
//     new Accordion('.faq-accordion-container', {
//       duration: 300,
//       showMultiple: true,
//       collapse: true
//     });
//   });
  
//   document.addEventListener('DOMContentLoaded', function () {
//     const faqTriggers = document.querySelectorAll('.faq-trigger');

//     faqTriggers.forEach(trigger => {
//       trigger.addEventListener('click', function () {
//         this.classList.toggle('is-active');
//       });
//     });
//   });
// }



//* ПЕРШИЙ ВАРІАНТ КОДУ, БЕЗ ФУНКЦІЇ ДЛЯ ЗМІНИ ІКОНКИ ПО КЛІКУ *//
// function faqAccordion() {
//   document.addEventListener("DOMContentLoaded", faqAccordion);
// }

// new Accordion('.faq-accordion-container', {
//     duration: 300,
//     showMultiple: true,
//     collapse: true
// });
// export { faqAccordion };