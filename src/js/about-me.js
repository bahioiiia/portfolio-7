import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import Sprite from '../img/icons.svg'
export function accordion() {
  document.addEventListener("DOMContentLoaded", function() {
    new Accordion('.accordion-container', {
        duration: 700,
        showMultiple: true,
    });
});
const AccordeonUl = document.querySelector(".accordion-container")
AccordeonUl.addEventListener('click', e => {
  const elem = e.target.closest('.ac-trigger');
  const aboutMainDiv = elem.closest('.ac');
  const linkSvgAcc = elem.querySelector('.aboutme-accordeon-svg use');
  const activeElem = elem.closest('.is-active');
  const acTextPanel = document.querySelector('.aboutme-ac-panel');

  if (aboutMainDiv && linkSvgAcc) {
    const iconStan = activeElem ? '#icon-accordeon_mobile_opened_svg-min' : '#icon-accordeon_svg_mobile-min';
    linkSvgAcc.setAttribute('href', `${Sprite}${iconStan}`);
  }
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
              spaceBetween: 90,
              width:280,
              slidesPerView: 2,
              slidesPerGroup: 1,
            },
            768: {
              width:650,
              spaceBetween: 60,
              slidesPerView: 3,
              slidesPerGroup: 1,
            },
            1440: {
              slidesPerView:6,
              width:1340,
              slidesPerView: 6,
              slidesPerGroup: 1,
            }
          },
          on: {
            slideChange: function() {
              const slides = document.querySelectorAll('.aboutme-swiper-slide');
              slides.forEach(slide => {
                slide.style.backgroundColor = ''; 
              });
              
              const activeSlide = slides[this.activeIndex];
              activeSlide.style.backgroundColor = '#ed3b44'; 
            },
          },
      });
      let currentIndex = 1; 
      function aboutmeClicker() {
          const aboutmeButton = document.querySelector(".aboutme-button-1440");
          const aboutmeSlides = document.querySelectorAll(".aboutme-swiper-slide");
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
