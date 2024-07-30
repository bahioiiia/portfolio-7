import{A as m,S as d}from"./assets/vendor-82e70d45.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();const b="/portfolio-7/assets/icons-48184d5d.svg";function g(){document.addEventListener("DOMContentLoaded",function(){new m(".accordion-container",{duration:700,showMultiple:!0})}),document.querySelector(".accordion-container").addEventListener("click",e=>{const n=e.target.closest(".ac-trigger"),s=n.closest(".ac"),t=n.querySelector(".aboutme-accordeon-svg use"),r=n.closest(".is-active");if(document.querySelector(".aboutme-ac-panel"),s&&t){const c=r?"#icon-accordeon_mobile_opened_svg-min":"#icon-accordeon_svg_mobile-min";t.setAttribute("href",`${b}${c}`)}})}function h(){document.addEventListener("DOMContentLoaded",function(){document.querySelector(".swiper-slide"),new d(".swiper-container",{navigation:{nextEl:".swiper-button-next"},loop:!0,keyboard:{enabled:!0},breakpoints:{320:{spaceBetween:0,width:280,slidesPerView:2,slidesPerGroup:1},768:{width:650,spaceBetween:0,slidesPerView:3,slidesPerGroup:1},1440:{spaceBetween:0,slidesPerView:6,width:1340,slidesPerView:6,slidesPerGroup:1}},on:{slideChange:function(){const n=document.querySelectorAll(".aboutme-swiper-slide");n.forEach(t=>{t.style.backgroundColor=""});const s=n[this.activeIndex];s.style.backgroundColor="#ed3b44"}}});let o=1;function e(){const n=document.querySelector(".aboutme-button-1440"),s=document.querySelectorAll(".aboutme-swiper-slide"),t=Array.from(s);n.addEventListener("click",r);function r(){t.forEach((c,a)=>{c.style.backgroundColor=a===o?"#ed3b44":"transparent"}),o=(o+1)%t.length}}e()})}function u(o){return`
    <svg width="15px" height="7.5px" class="faq-svg">
      <use href="./img/icons.svg#${o}"></use>
    </svg>
  `}function w(){document.addEventListener("DOMContentLoaded",function(){new m(".faq-accordion-container",{duration:300,showMultiple:!0,collapse:!0})}),document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".faq-trigger").forEach(e=>{e.insertAdjacentHTML("beforeend",u("closed-accordeon")),e.addEventListener("click",function(){this.classList.toggle("is-active");const s=this.classList.contains("is-active")?"icon-Vector9":"closed-accordeon";this.querySelector(".faq-svg").outerHTML=u(s)})})})}function y(){const o=document.querySelector(".header-mob-button"),e=document.querySelector(".mob-menu-backdrop").classList,n=document.querySelector(".mob-close"),s=document.querySelectorAll(".mob-link"),t=document.querySelector(".header-modal-button"),r=document.querySelector(".header-menu"),c=document.querySelector(".tab-menu-hidden").classList,a=document.querySelector(".header-tab-button");r.addEventListener("click",()=>{c.toggle("is-open-menu")}),o.addEventListener("click",()=>{e.add("is-open")}),n.addEventListener("click",()=>{e.remove("is-open")}),t.addEventListener("click",i=>{l(i,t),e.remove("is-open")}),s.forEach(i=>{i.addEventListener("click",v=>{e.remove("is-open"),c.remove("is-open-menu"),l(v,i)})}),a.addEventListener("click",i=>{l(i,a)})}function l(o,e){o.preventDefault(),document.querySelector(e.getAttribute("href")).scrollIntoView({behavior:"smooth"})}const S=[{codeItemOne:"#react",codeItemTwo:"#js",codeItemThree:"#node js",codeItemFour:"#git",text:"Programming Across Borders: Ideas, Technologies, Innovations",btnHref:"./index.html",btnText:"See project"}];function L(){return S.map(({codeItemOne:o,codeItemTwo:e,codeItemThree:n,codeItemFour:s,text:t,btnHref:r,btnText:c})=>`<div class="top-part">
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
            <a href="${r}" class="main-button-a" target="_blank rel="noopener noreferrer"
              >${c}</a
            >
          </div>`).join("")}const q=document.querySelector(".swiper-wrapper-js");async function E(o){const e=await fetch(o);if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);return e.json()}async function A(){let o=[];try{o=await E("https://portfolio-js.b.goit.study/api/reviews")}catch(e){console.error(e)}o.forEach(e=>{const n=`
        <li class="swiper-slide review-card">
          <img src="${e.avatar_url}" class="review-img" alt="1" />
          <p class="review-name">${e.author}</p>
          <p class="review-text">${e.review}</p>
        </li>`;q.insertAdjacentHTML("beforeend",n)})}const p=document.querySelector(".container-footer-modal"),k=document.querySelector(".hidden"),M=document.querySelector(".button-close");function P(o){o.preventDefault();const e=o.target,n=e.elements.email.value.trim(),s=e.elements.comments.value.trim();if(n===""||s==="")alert("All form fields must be filled in");else{const t={email:`${n}`,comments:`${s}`};console.log("data",t),e.reset(),T({data:t}).then(r=>{console.log("відповідь +"),console.log("resul",r)}).catch(r=>console.log("err",r)),$()}}const x="https://portfolio-js.b.goit.study/api";function T(o){const e={method:"POST",body:JSON.stringify(o),heder:{"Content-Tape":"application/json"}};return fetch(`${x}/requests`,e).then(n=>{if(!n.ok)throw new Error(n.status);return n.json})}M.addEventListener("click",f);k.addEventListener("click",f);function $(){p.classList.remove("hidden")}function f(){p.classList.add("hidden")}y();g();h();w();new d(".swiper",{direction:"horizontal",effect:"flip",speed:1e3,grabCursor:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!1}});const I=document.querySelectorAll(".slide-part-js");I.forEach(o=>{o.insertAdjacentHTML("afterbegin",L())});A();new d(".review-swiper",{direction:"horizontal",loop:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{320:{slidesPerView:1,slidesPerGroup:1,spaceBetween:16},768:{slidesPerView:2,slidesPerGroup:1,spaceBetween:16},1440:{slidesPerView:4,slidesPerGroup:1,spaceBetween:16}}});const j=document.querySelector(".form-footer");j.addEventListener("submit",P);
//# sourceMappingURL=commonHelpers.js.map
