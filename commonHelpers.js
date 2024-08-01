import{A as S,S as v}from"./assets/vendor-82e70d45.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=o(n);fetch(n.href,r)}})();function x(){const t=document.querySelector(".header-mob-button"),e=document.querySelector(".mob-menu-backdrop").classList,o=document.querySelector(".mob-close"),s=document.querySelectorAll(".mob-link"),n=document.querySelector(".header-modal-button"),r=document.querySelector(".header-menu"),i=document.querySelector(".tab-menu-hidden").classList,g=document.querySelector(".header-tab-button");r.addEventListener("click",()=>{i.toggle("is-open-menu")}),t.addEventListener("click",()=>{e.add("is-open")}),o.addEventListener("click",()=>{e.remove("is-open")}),n.addEventListener("click",c=>{u(c,n),e.remove("is-open")}),s.forEach(c=>{c.addEventListener("click",k=>{e.remove("is-open"),i.remove("is-open-menu"),u(k,c)})}),g.addEventListener("click",c=>{u(c,g)})}function u(t,e){t.preventDefault(),document.querySelector(e.getAttribute("href")).scrollIntoView({behavior:"smooth"})}const q="/portfolio-7/assets/icons-09cfefdb.svg";function M(){document.addEventListener("DOMContentLoaded",function(){new S(".accordion-container",{duration:700,showMultiple:!0})}),document.querySelector(".accordion-container").addEventListener("click",e=>{const o=e.target.closest(".ac-trigger"),s=o.closest(".ac"),n=o.querySelector(".aboutme-accordeon-svg use"),r=o.closest(".is-active");if(s&&n){const i=r?"#icon-accordeon_mobile_opened_svg-min":"#icon-accordeon_svg_mobile-min";n.setAttribute("href",`${q}${i}`)}})}function $(){document.addEventListener("DOMContentLoaded",function(){document.querySelector(".swiper-slide"),new v(".swiper-container",{navigation:{nextEl:".swiper-button-next"},direction:"horizontal",spaceBetween:0,enabled:!0,loop:!0,watchOverflow:!0,keyboard:{enabled:!0,onlyInViewport:!1},breakpoints:{375:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}},on:{slideChange:function(){const t=document.querySelectorAll(".aboutme-swiper-slide");t.forEach(o=>{o.style.backgroundColor=""});const e=t[this.activeIndex];e.style.backgroundColor="#ed3b44"}}})})}function w(t){return`
    <svg width="15px" height="7.5px" class="faq-svg">
      <use href="${q}#${t}"></use>
    </svg>
  `}function P(){document.addEventListener("DOMContentLoaded",function(){new S(".faq-accordion-container",{duration:300,showMultiple:!0,collapse:!0})}),document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".faq-trigger").forEach(e=>{e.insertAdjacentHTML("beforeend",w("icon-accordeon_svg_mobile-min")),e.addEventListener("click",function(){this.classList.toggle("is-active");const s=this.classList.contains("is-active")?"icon-accordeon_mobile_opened_svg-min":"icon-accordeon_svg_mobile-min";this.querySelector(".faq-svg").outerHTML=w(s)})})})}const j=[{codeItemOne:"#react",codeItemTwo:"#js",codeItemThree:"#node js",codeItemFour:"#git",text:"Programming Across Borders: Ideas, Technologies, Innovations",btnHref:"./index.html",btnText:"See project"}];function C(){return j.map(({codeItemOne:t,codeItemTwo:e,codeItemThree:o,codeItemFour:s,text:n,btnHref:r,btnText:i})=>`<div class="top-part">
            <ul class="code-list">
              <li class="code-item">
                <p class="code-text">${t}</p>
              </li>
              <li class="code-item">
                <p class="code-text">${e}</p>
              </li>
              <li class="code-item">
                <p class="code-text">${o}</p>
              </li>
              <li class="code-item">
                <p class="code-text">${s}</p>
              </li>
            </ul>
            <p class="main-text">
              ${n}
            </p>
            <a href="${r}" class="main-button-a" target="_blank rel="noopener noreferrer nofollow"
              >${i}</a
            >
          </div>`).join("")}const O=document.querySelector(".swiper-wrapper-js"),b=190;async function I(t){const e=await fetch(t);if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);return e.json()}async function H(){let t=[];try{t=await I("https://portfolio-js.b.goit.study/api/reviews")}catch(e){console.error(e)}t.forEach(e=>{const o=`
        <li class="swiper-slide review-card">
          <img src="${e.avatar_url}" class="review-img" alt=${e.author} />
          <p class="review-name">${e.author}</p>
          <p class="review-text">${e.review.length>b?e.review.substring(0,b)+"...":e.review}</p>
        </li>`;O.insertAdjacentHTML("beforeend",o)})}const A=document.querySelector(".container-footer-modal"),_=document.querySelector(".hidden"),D=document.querySelector(".button-close"),h=document.querySelector(".modal"),a=document.querySelector(".input-email"),d=document.querySelector(".input-comments");let l={email:""};const B=document.querySelector(".form-footer");B.addEventListener("input",R);function R(t){const{email:e}=t.currentTarget.elements;l.email=e.value.trim(),l={email:l.email},l.email.includes("@")&&l.email.includes(".")&&!l.email.endsWith(".")&&f()}function V(t){t.preventDefault();const e=t.target,o=e.elements.email.value.trim(),s=e.elements.comments.value.trim();if(o===""&&s===""){L(),E(),alert("All form fields must be filled in");return}else if(o===""||!s===""){L(),y(),alert("Email form fields must be filled in");return}else if(s===""||!o===""){E(),f(),alert("Comment form fields must be filled in");return}else z(),J(),f(),y(),G({email:o,comment:s});e.reset()}function G(t){const e={method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json; charset=UTF-8"}};fetch("https://portfolio-js.b.goit.study/api/requests",e).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()}).then(o=>{const n=[o].map(r=>`<li>
            <h3 class="modal-footer-title">${r.title}</h3>
          </li>
          <li>
            <p class="modal-footer-text">${r.message}</p>
          </li>
        `).join("");h.insertAdjacentHTML("beforeend",n)}).catch(o=>console.log(o)),h.innerHTML="",N(),D.addEventListener("click",m),_.addEventListener("click",m),document.addEventListener("keydown",F)}function F(t){t.code==="Escape"&&m()}function N(){A.classList.remove("hidden")}function m(){A.classList.add("hidden"),U(),W()}function f(){a.classList.add("green")}function y(){d.classList.add("green")}function U(){a.classList.remove("green")}function W(){d.classList.remove("green")}function L(){a.classList.add("red")}function E(){d.classList.add("red")}function z(){a.classList.remove("red")}function J(){d.classList.remove("red")}const p=document.querySelector(".go-top");p.addEventListener("click",K);window.addEventListener("scroll",T);function T(){const t=window.scrollY,e=document.documentElement.clientHeight;t>e?p.classList.add("go-top-show"):p.classList.remove("go-top-show")}function K(){window.scrollTo({top:0,behavior:"smooth"})}x();M();$();P();new v(".swiper",{direction:"horizontal",effect:"flip",speed:1e3,grabCursor:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!1}});const Y=document.querySelectorAll(".slide-part-js");Y.forEach(t=>{t.insertAdjacentHTML("afterbegin",C())});H();new v(".review-swiper",{direction:"horizontal",loop:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{320:{slidesPerView:1,slidesPerGroup:1,spaceBetween:16},768:{slidesPerView:2,slidesPerGroup:1,spaceBetween:16},1440:{slidesPerView:4,slidesPerGroup:1,spaceBetween:16}}});const Q=document.querySelector(".form-footer");Q.addEventListener("submit",V);T();
//# sourceMappingURL=commonHelpers.js.map
