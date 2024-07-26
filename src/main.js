import {accordion} from './js/about-me';
accordion();
import {swiper1} from './js/about-me';
swiper1();

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
});

const swiper3 = new Swiper('.reviews-swiper', {
 // Optional parameters
 direction: 'horizontal',
 // Navigation arrows
 navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
 },

});
