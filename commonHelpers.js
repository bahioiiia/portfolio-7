import{A as l,S as a}from"./assets/vendor-82e70d45.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();function f(){document.addEventListener("DOMContentLoaded",function(){new l(".accordion-container",{duration:300,showMultiple:!0})}),document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".aboutme-ac-trigger").forEach(e=>{e.addEventListener("click",function(){const r=this.closest(".aboutme-ac"),n=this.querySelector(".aboutme-accordeon-svg use");r.classList.contains("is-active")?n.setAttribute("href","./img/icons.svg#icon-Vector9"):n.setAttribute("href","./img/icons.svg#closed-accordeon")})})})}function g(){document.addEventListener("DOMContentLoaded",function(){document.querySelector(".swiper-slide"),new a(".swiper-container",{navigation:{nextEl:".swiper-button-next"},loop:!0,keyboard:{enabled:!0},breakpoints:{320:{slidesPerView:2,slidesPerGroup:1},768:{slidesPerView:3,slidesPerGroup:1},1440:{slidesPerView:6,slidesPerGroup:1}},on:{slideChange:function(){const r=document.querySelectorAll(".aboutme-swiper-slide p");r.forEach(t=>{t.style.backgroundColor=""});const n=r[this.activeIndex];n.style.backgroundColor="#ed3b44"}}});let o=1;function e(){const r=document.querySelector(".aboutme-button-1440"),n=document.querySelectorAll(".aboutme-swiper-slide p"),t=Array.from(n);r.addEventListener("click",s);function s(){t.forEach((c,m)=>{c.style.backgroundColor=m===o?"#ed3b44":"transparent"}),o=(o+1)%t.length}n.forEach(c=>{c.addEventListener("mouseover",i),c.addEventListener("mouseout",p)});function i(){this.style.backgroundColor="#ed3b44"}function p(){this.style.backgroundColor="transparent"}}e()})}function w(){document.addEventListener("DOMContentLoaded",function(){new l(".faq-accordion-container",{duration:300,showMultiple:!0,collapse:!0})}),document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".faq-trigger").forEach(e=>{e.addEventListener("click",function(){this.classList.toggle("is-active")})})})}document.querySelector(".form-footer");const d=document.querySelector(".container-footer-modal"),b=document.querySelector(".hidden"),v=document.querySelector(".button-close");function h(o){o.preventDefault();const e=o.target,r=e.elements.email.value.trim(),n=e.elements.comments.value.trim();r===""||n===""?alert("All form fields must be filled in"):(console.log({email:r,comments:n}),e.reset(),y())}v.addEventListener("click",u);b.addEventListener("click",u);function y(){d.classList.remove("hidden")}function u(){d.classList.add("hidden")}const L=[{codeItemOne:"#react",codeItemTwo:"#js",codeItemThree:"#node js",codeItemFour:"#git",text:"Programming Across Borders: Ideas, Technologies, Innovations",btnHref:"./index.html",btnText:"See project"}];function E(){return L.map(({codeItemOne:o,codeItemTwo:e,codeItemThree:r,codeItemFour:n,text:t,btnHref:s,btnText:i})=>`<div class="top-part">
            <ul class="code-list">
              <li class="code-item">
                <p class="code-text">${o}</p>
              </li>
              <li class="code-item">
                <p class="code-text">${e}</p>
              </li>
              <li class="code-item">
                <p class="code-text">${r}</p>
              </li>
              <li class="code-item">
                <p class="code-text">${n}</p>
              </li>
            </ul>
            <p class="main-text">
              ${t}
            </p>
            <a href="${s}" class="main-button-a" target="_blank"
              >${i}</a
            >
          </div>`).join("")}const q=document.querySelector(".swiper-wrapper-js");async function x(o){const e=await fetch(o);if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);return e.json()}async function P(){let o=[];try{o=await x("https://portfolio-js.b.goit.study/api/reviews")}catch(e){console.error(e)}o.forEach(e=>{const r=`
        <li class="swiper-slide review-card">
          <img src="${e.avatar_url}" class="review-img" alt="1" />
          <p class="review-name">${e.author}</p>
          <p class="review-text">${e.review}</p>
        </li>`;q.insertAdjacentHTML("beforeend",r)})}f();g();w();inputForm.addEventListener("submit",h);new a(".swiper",{direction:"horizontal",effect:"flip",speed:1e3,grabCursor:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!1}});const S=document.querySelectorAll(".slide-part-js");S.forEach(o=>{o.insertAdjacentHTML("afterbegin",E())});P();new a(".review-swiper",{direction:"horizontal",loop:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{320:{slidesPerView:1,slidesPerGroup:1,spaceBetween:16},768:{slidesPerView:2,slidesPerGroup:1,spaceBetween:16},1440:{slidesPerView:4,slidesPerGroup:1,spaceBetween:16}}});
//# sourceMappingURL=commonHelpers.js.map
