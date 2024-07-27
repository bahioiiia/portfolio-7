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
  document.addEventListener('DOMContentLoaded', function() {
      const swiperSlide = document.querySelector(".swiper-slide")
      const swiper = new Swiper('.swiper-container', {
          navigation: {
              nextEl: '.swiper-button-next',
          },
          loop:true,
          keyboard:{
            enabled:true,
          },
          breakpoints: {
                  320: {
              slidesPerView: 2,
              slidesPerGroup: 1,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 1,
            },
            1440: {
              slidesPerView: 6,
              slidesPerGroup: 1,
            }
          },
          on: {
            slideChange: function() {
              const slides = document.querySelectorAll('.aboutme-swiper-slide li');
              slides.forEach(slide => {
                slide.style.backgroundColor = ''; 
              });
              
              const activeSlide = slides[this.activeIndex];
              activeSlide.style.backgroundColor = '#ed3b44'; 
            },
          },
      });
      let currentIndex = 0; 
      function aboutmeClicker() {
          const aboutmeButton = document.querySelector(".aboutme-button-1440");
          const aboutmeSlides = document.querySelectorAll(".aboutme-swiper-slide li");
          const aboutmeMassive = Array.from(aboutmeSlides); 
      
          aboutmeButton.addEventListener("click", handler);
      
          function handler() {
              aboutmeMassive.forEach((slide, index) => {
                  slide.style.backgroundColor = index === currentIndex ? "#ed3b44" : "transparent";
              });
      
              currentIndex = (currentIndex + 1) % aboutmeMassive.length; 
          }
      }
      
      aboutmeClicker();

    });
  }
