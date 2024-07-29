import { accordion} from './js/about-me';
import { swiper1 } from './js/about-me';
import { faqAccordion } from './js/faq';

accordion();
swiper1();
faqAccordion();


// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
    // Optional parameters 
    direction: 'horizontal',
    effect: 'flip',
    speed: 1000,
    grabCursor: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
});

import { onGetHtmlMarckup } from './js/projects';
const slideParts = document.querySelectorAll('.slide-part-js');
slideParts.forEach(slidePart => {
  slidePart.insertAdjacentHTML('afterbegin', onGetHtmlMarckup());
});

import { onMarckupHtmlReview } from './js/reviews';
onMarckupHtmlReview();
const swiperReview = new Swiper('.review-swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 16,
    },
    1440: {
      slidesPerView: 4,
      slidesPerGroup: 1,
      spaceBetween: 16,
    },
  },
});
