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
    slidesPerView: 1,
  spaceBetween: 0,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 0
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }
  });
})
}
