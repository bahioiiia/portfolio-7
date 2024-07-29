import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

function faqAccordion() {
  document.addEventListener("DOMContentLoaded", faqAccordion);
}

new Accordion('.faq-accordion-container', {
    duration: 300,
    showMultiple: true,
    collapse: true
});
  
export { faqAccordion };

