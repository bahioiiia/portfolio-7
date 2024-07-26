import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
export function accordion() {
  document.addEventListener("DOMContentLoaded", function() {
    new Accordion('.accordion-container', {
        duration: 300,
        showMultiple: false,
        collapse: true
    });
});
}
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle'
export function swiper1() {
  document.addEventListener('DOMContentLoaded', function(){
    new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',

    },
  });
})
}
