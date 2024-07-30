import{A as p,S as d}from"./assets/vendor-82e70d45.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();const f="/portfolio-7/assets/icons-8c8fc992.svg";function b(){document.addEventListener("DOMContentLoaded",function(){new p(".accordion-container",{duration:0,showMultiple:!0})}),document.querySelector(".accordion-container").addEventListener("click",e=>{const n=e.target.closest(".ac-trigger"),c=n.closest(".ac"),t=n.querySelector(".aboutme-accordeon-svg use"),r=n.closest(".is-active");if(document.querySelector(".aboutme-ac-panel"),c&&t){const s=r?"#icon-accordeon_mobile_opened_svg-min":"#icon-accordeon_svg_mobile-min";t.setAttribute("href",`${f}${s}`)}})}function v(){document.addEventListener("DOMContentLoaded",function(){document.querySelector(".swiper-slide"),new d(".swiper-container",{navigation:{nextEl:".swiper-button-next"},loop:!0,keyboard:{enabled:!0},breakpoints:{320:{slidesPerView:2,slidesPerGroup:1},768:{slidesPerView:3,slidesPerGroup:1},1440:{slidesPerView:6,slidesPerGroup:1}},on:{slideChange:function(){const n=document.querySelectorAll(".aboutme-swiper-slide p");n.forEach(t=>{t.style.backgroundColor=""});const c=n[this.activeIndex];c.style.backgroundColor="#ed3b44"}}});let o=1;function e(){const n=document.querySelector(".aboutme-button-1440"),c=document.querySelectorAll(".aboutme-swiper-slide p"),t=Array.from(c);n.addEventListener("click",r);function r(){t.forEach((s,a)=>{s.style.backgroundColor=a===o?"#ed3b44":"transparent"}),o=(o+1)%t.length}}e()})}function u(o){return`
    <svg width="15px" height="7.5px" class="faq-svg">
      <use href="./img/icons.svg#${o}"></use>
    </svg>
  `}function g(){document.addEventListener("DOMContentLoaded",function(){new p(".faq-accordion-container",{duration:300,showMultiple:!0,collapse:!0})}),document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".faq-trigger").forEach(e=>{e.insertAdjacentHTML("beforeend",u("closed-accordeon")),e.addEventListener("click",function(){this.classList.toggle("is-active");const c=this.classList.contains("is-active")?"icon-Vector9":"closed-accordeon";this.querySelector(".faq-svg").outerHTML=u(c)})})})}function w(){const o=document.querySelector(".header-mob-button"),e=document.querySelector(".mob-menu-backdrop").classList,n=document.querySelector(".mob-close"),c=document.querySelectorAll(".mob-link"),t=document.querySelector(".header-modal-button"),r=document.querySelector(".header-menu"),s=document.querySelector(".tab-menu-hidden").classList,a=document.querySelector(".header-tab-button");r.addEventListener("click",()=>{s.toggle("is-open-menu")}),o.addEventListener("click",()=>{e.add("is-open")}),n.addEventListener("click",()=>{e.remove("is-open")}),t.addEventListener("click",i=>{l(i,t),e.remove("is-open")}),c.forEach(i=>{i.addEventListener("click",m=>{e.remove("is-open"),l(m,i)})}),a.addEventListener("click",i=>{l(i,a)})}function l(o,e){o.preventDefault(),document.querySelector(e.getAttribute("href")).scrollIntoView({behavior:"smooth"})}const h=[{codeItemOne:"#react",codeItemTwo:"#js",codeItemThree:"#node js",codeItemFour:"#git",text:"Programming Across Borders: Ideas, Technologies, Innovations",btnHref:"./index.html",btnText:"See project"}];function y(){return h.map(({codeItemOne:o,codeItemTwo:e,codeItemThree:n,codeItemFour:c,text:t,btnHref:r,btnText:s})=>`<div class="top-part">
            <ul class="code-list">
              <li class="code-item">
                <p class="code-text">${o}</p>
              </li>
              <li class="code-item">
                <p class="code-text">${e}</p>
              </li>
              <li class="code-item">
                <p class="code-text">${n}</p>
              </li>
              <li class="code-item">
                <p class="code-text">${c}</p>
              </li>
            </ul>
            <p class="main-text">
              ${t}
            </p>
            <a href="${r}" class="main-button-a" target="_blank rel="noopener noreferrer"
              >${s}</a
            >
          </div>`).join("")}const S=document.querySelector(".swiper-wrapper-js");async function L(o){const e=await fetch(o);if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);return e.json()}async function q(){let o=[];try{o=await L("https://portfolio-js.b.goit.study/api/reviews")}catch(e){console.error(e)}o.forEach(e=>{const n=`
        <li class="swiper-slide review-card">
          <img src="${e.avatar_url}" class="review-img" alt="1" />
          <p class="review-name">${e.author}</p>
          <p class="review-text">${e.review}</p>
        </li>`;S.insertAdjacentHTML("beforeend",n)})}w();b();v();g();new d(".swiper",{direction:"horizontal",effect:"flip",speed:1e3,grabCursor:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!1}});const E=document.querySelectorAll(".slide-part-js");E.forEach(o=>{o.insertAdjacentHTML("afterbegin",y())});q();new d(".review-swiper",{direction:"horizontal",loop:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{320:{slidesPerView:1,slidesPerGroup:1,spaceBetween:16},768:{slidesPerView:2,slidesPerGroup:1,spaceBetween:16},1440:{slidesPerView:4,slidesPerGroup:1,spaceBetween:16}}});document.querySelector(".form-footer");
//# sourceMappingURL=commonHelpers.js.map
