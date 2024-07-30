import{A as m,S as u}from"./assets/vendor-82e70d45.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();function f(){document.addEventListener("DOMContentLoaded",function(){new m(".accordion-container",{duration:300,showMultiple:!0})}),document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".aboutme-ac-trigger").forEach(e=>{e.addEventListener("click",function(){const n=this.closest(".aboutme-ac"),s=this.querySelector(".aboutme-accordeon-svg use");n.classList.contains("is-active")?s.setAttribute("href","./img/icons.svg#icon-Vector9"):s.setAttribute("href","./img/icons.svg#closed-accordeon")})})})}function b(){document.addEventListener("DOMContentLoaded",function(){document.querySelector(".swiper-slide"),new u(".swiper-container",{navigation:{nextEl:".swiper-button-next"},loop:!0,keyboard:{enabled:!0},breakpoints:{320:{slidesPerView:2,slidesPerGroup:1},768:{slidesPerView:3,slidesPerGroup:1},1440:{slidesPerView:6,slidesPerGroup:1}},on:{slideChange:function(){const n=document.querySelectorAll(".aboutme-swiper-slide p");n.forEach(t=>{t.style.backgroundColor=""});const s=n[this.activeIndex];s.style.backgroundColor="#ed3b44"}}});let o=1;function e(){const n=document.querySelector(".aboutme-button-1440"),s=document.querySelectorAll(".aboutme-swiper-slide p"),t=Array.from(s);n.addEventListener("click",r);function r(){t.forEach((c,l)=>{c.style.backgroundColor=l===o?"#ed3b44":"transparent"}),o=(o+1)%t.length}s.forEach(c=>{c.addEventListener("mouseover",i),c.addEventListener("mouseout",a)});function i(){this.style.backgroundColor="#ed3b44"}function a(){this.style.backgroundColor="transparent"}}e()})}function p(o){return`
    <svg width="15px" height="7.5px" class="faq-svg">
      <use href="./img/icons.svg#${o}"></use>
    </svg>
  `}function v(){document.addEventListener("DOMContentLoaded",function(){new m(".faq-accordion-container",{duration:300,showMultiple:!0,collapse:!0})}),document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".faq-trigger").forEach(e=>{e.insertAdjacentHTML("beforeend",p("closed-accordeon")),e.addEventListener("click",function(){this.classList.toggle("is-active");const s=this.classList.contains("is-active")?"icon-Vector9":"closed-accordeon";this.querySelector(".faq-svg").outerHTML=p(s)})})})}function g(){const o=document.querySelector(".header-mob-button"),e=document.querySelector(".mob-menu-backdrop").classList,n=document.querySelector(".mob-close"),s=document.querySelectorAll(".mob-link"),t=document.querySelector(".header-modal-button"),r=document.querySelector(".header-menu"),i=document.querySelector(".tab-menu-hidden").classList,a=document.querySelector(".header-tab-button");r.addEventListener("click",()=>{i.toggle("is-open-menu")}),o.addEventListener("click",()=>{e.add("is-open")}),n.addEventListener("click",()=>{e.remove("is-open")}),t.addEventListener("click",c=>{d(c,t),e.remove("is-open")}),s.forEach(c=>{c.addEventListener("click",l=>{e.remove("is-open"),d(l,c)})}),a.addEventListener("click",c=>{d(c,a)})}function d(o,e){o.preventDefault(),document.querySelector(e.getAttribute("href")).scrollIntoView({behavior:"smooth"})}const h=[{codeItemOne:"#react",codeItemTwo:"#js",codeItemThree:"#node js",codeItemFour:"#git",text:"Programming Across Borders: Ideas, Technologies, Innovations",btnHref:"./index.html",btnText:"See project"}];function w(){return h.map(({codeItemOne:o,codeItemTwo:e,codeItemThree:n,codeItemFour:s,text:t,btnHref:r,btnText:i})=>`<div class="top-part">
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
                <p class="code-text">${s}</p>
              </li>
            </ul>
            <p class="main-text">
              ${t}
            </p>
            <a href="${r}" class="main-button-a" target="_blank"
              >${i}</a
            >
          </div>`).join("")}const y=document.querySelector(".swiper-wrapper-js");async function L(o){const e=await fetch(o);if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);return e.json()}async function E(){let o=[];try{o=await L("https://portfolio-js.b.goit.study/api/reviews")}catch(e){console.error(e)}o.forEach(e=>{const n=`
        <li class="swiper-slide review-card">
          <img src="${e.avatar_url}" class="review-img" alt="1" />
          <p class="review-name">${e.author}</p>
          <p class="review-text">${e.review}</p>
        </li>`;y.insertAdjacentHTML("beforeend",n)})}g();f();b();v();new u(".swiper",{direction:"horizontal",effect:"flip",speed:1e3,grabCursor:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!1}});const S=document.querySelectorAll(".slide-part-js");S.forEach(o=>{o.insertAdjacentHTML("afterbegin",w())});E();new u(".review-swiper",{direction:"horizontal",loop:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{320:{slidesPerView:1,slidesPerGroup:1,spaceBetween:16},768:{slidesPerView:2,slidesPerGroup:1,spaceBetween:16},1440:{slidesPerView:4,slidesPerGroup:1,spaceBetween:16}}});
//# sourceMappingURL=commonHelpers.js.map
