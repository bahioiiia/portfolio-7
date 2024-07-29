import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

// function faqAccordion() {
//   document.addEventListener("DOMContentLoaded", faqAccordion);
// }

// new Accordion('.faq-accordion-container', {
//     duration: 300,
//     showMultiple: true,
//     collapse: true
// });


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
      trigger.addEventListener('click', function () {
        this.classList.toggle('is-active');
      });
    });
  });
}

  
// export { faqAccordion };