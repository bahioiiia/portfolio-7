import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
// import iconArrowDown from '../img/icons.svg#icon-arrow-down';
// import iconArrowUp from '../img/icons.svg#icon-arrow-up';

function createSvgIcon(iconId) {
  return `
    <svg width="15px" height="7.5px" class="faq-svg">
      <use href="./img/icons.svg#${iconId}"></use>
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
      trigger.insertAdjacentHTML('beforeend', createSvgIcon('closed-accordeon'));

      trigger.addEventListener('click', function () {
        this.classList.toggle('is-active');
        
        const isActive = this.classList.contains('is-active');
        const iconId = isActive ? 'icon-Vector9' : 'closed-accordeon';
        this.querySelector('.faq-svg').outerHTML = createSvgIcon(iconId);
        // const iconUrl = isActive ? `url("${iconArrowUp}")` : `url("${iconArrowDown}")`;
        // this.style.setProperty('--faq-icon-url', iconUrl);
      });
    });
  });
}







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