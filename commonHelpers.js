import{A as L,S as p}from"./assets/vendor-82e70d45.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}})();function k(){const o=document.querySelector(".header-mob-button"),e=document.querySelector(".mob-menu-backdrop").classList,n=document.querySelector(".mob-close"),r=document.querySelectorAll(".mob-link"),t=document.querySelector(".header-modal-button"),s=document.querySelector(".header-menu"),c=document.querySelector(".tab-menu-hidden").classList,l=document.querySelector(".header-tab-button");s.addEventListener("click",()=>{c.toggle("is-open-menu")}),o.addEventListener("click",()=>{e.add("is-open")}),n.addEventListener("click",()=>{e.remove("is-open")}),t.addEventListener("click",i=>{m(i,t),e.remove("is-open")}),r.forEach(i=>{i.addEventListener("click",a=>{e.remove("is-open"),c.remove("is-open-menu"),m(a,i)})}),l.addEventListener("click",i=>{m(i,l)})}function m(o,e){o.preventDefault(),document.querySelector(e.getAttribute("href")).scrollIntoView({behavior:"smooth"})}const E="/portfolio-7/assets/icons-00d4ef3e.svg";function M(){document.addEventListener("DOMContentLoaded",function(){new L(".accordion-container",{duration:700,showMultiple:!0})}),document.querySelector(".accordion-container").addEventListener("click",e=>{const n=e.target.closest(".ac-trigger"),r=n.closest(".ac"),t=n.querySelector(".aboutme-accordeon-svg use"),s=n.closest(".is-active");if(document.querySelector(".aboutme-ac-panel"),r&&t){const c=s?"#icon-accordeon_mobile_opened_svg-min":"#icon-accordeon_svg_mobile-min";t.setAttribute("href",`${E}${c}`)}})}function T(){document.addEventListener("DOMContentLoaded",function(){document.querySelector(".swiper-slide"),new p(".swiper-container",{navigation:{nextEl:".swiper-button-next"},direction:"horizontal",spaceBetween:0,enabled:!0,loop:!0,watchOverflow:!0,keyboard:{enabled:!0,onlyInViewport:!1},breakpoints:{375:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}},on:{slideChange:function(){const n=document.querySelectorAll(".aboutme-swiper-slide");n.forEach(t=>{t.style.backgroundColor=""});const r=n[this.activeIndex];r.style.backgroundColor="#ed3b44"}}});let o=1;function e(){const n=document.querySelector(".aboutme-button-1440"),r=document.querySelectorAll(".aboutme-swiper-slide"),t=Array.from(r);n.addEventListener("click",s),document.addEventListener("keydown",c);function s(){t.forEach((l,i)=>{l.style.backgroundColor=i===o?"#ed3b44":"transparent"}),o=(o+1)%t.length}function c(l){if(l.key==="ArrowRight")t.forEach((i,a)=>{i.style.backgroundColor=a===o?"#ed3b44":"transparent"}),o=(o+1)%t.length;else if(l.key==="ArrowLeft")o=(o-1+t.length)%t.length,t.forEach((i,a)=>{i.style.backgroundColor=a===o?"#ed3b44":"transparent"});else return}}e()})}function v(o){return`
    <svg width="15px" height="7.5px" class="faq-svg">
      <use href="${E}#${o}"></use>
    </svg>
  `}function x(){document.addEventListener("DOMContentLoaded",function(){new L(".faq-accordion-container",{duration:300,showMultiple:!0,collapse:!0})}),document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".faq-trigger").forEach(e=>{e.insertAdjacentHTML("beforeend",v("icon-accordeon_svg_mobile-min")),e.addEventListener("click",function(){this.classList.toggle("is-active");const r=this.classList.contains("is-active")?"icon-accordeon_mobile_opened_svg-min":"icon-accordeon_svg_mobile-min";this.querySelector(".faq-svg").outerHTML=v(r)})})})}const C=[{codeItemOne:"#react",codeItemTwo:"#js",codeItemThree:"#node js",codeItemFour:"#git",text:"Programming Across Borders: Ideas, Technologies, Innovations",btnHref:"./index.html",btnText:"See project"}];function P(){return C.map(({codeItemOne:o,codeItemTwo:e,codeItemThree:n,codeItemFour:r,text:t,btnHref:s,btnText:c})=>`<div class="top-part">
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
                <p class="code-text">${r}</p>
              </li>
            </ul>
            <p class="main-text">
              ${t}
            </p>
            <a href="${s}" class="main-button-a" target="_blank rel="noopener noreferrer"
              >${c}</a
            >
          </div>`).join("")}const j=document.querySelector(".swiper-wrapper-js");async function $(o){const e=await fetch(o);if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);return e.json()}async function I(){let o=[];try{o=await $("https://portfolio-js.b.goit.study/api/reviews")}catch(e){console.error(e)}o.forEach(e=>{const n=`
        <li class="swiper-slide review-card">
          <img src="${e.avatar_url}" class="review-img" alt="1" />
          <p class="review-name">${e.author}</p>
          <p class="review-text">${e.review}</p>
        </li>`;j.insertAdjacentHTML("beforeend",n)})}const S=document.querySelector(".container-footer-modal"),O=document.querySelector(".hidden"),H=document.querySelector(".button-close"),b=document.querySelector(".modal"),d=document.querySelector(".input-email"),u=document.querySelector(".input-comments");function _(o){o.preventDefault();const e=o.target,n=e.elements.email.value.trim(),r=e.elements.comments.value.trim();if(n===""&&r===""){w(),y(),alert("All form fields must be filled in");return}else if(n===""||!r===""){w(),h(),alert("Email form fields must be filled in");return}else if(r===""||!n===""){y(),g(),alert("Comment form fields must be filled in");return}else G(),F(),g(),h(),D({email:n,comment:r});e.reset()}function D(o){const e={method:"POST",body:JSON.stringify(o),headers:{"Content-Type":"application/json; charset=UTF-8"}};fetch("https://portfolio-js.b.goit.study/api/requests",e).then(n=>{if(!n.ok)throw new Error(n.status);return n.json()}).then(n=>{const r=[n];console.log("post",r);const t=r.map(s=>`<li>
            <h3 class="modal-footer-title">${s.title}</h3>
          </li>
          <li>
            <p class="modal-footer-text">${s.message}</p>
          </li>
        `).join("");b.insertAdjacentHTML("beforeend",t)}).catch(n=>console.log(n)),b.innerHTML="",R()}H.addEventListener("click",q);O.addEventListener("click",q);function R(){S.classList.remove("hidden"),B(),V()}function q(){S.classList.add("hidden")}function g(){d.classList.add("green")}function h(){u.classList.add("green")}function B(){d.classList.remove("green")}function V(){u.classList.remove("green")}function w(){d.classList.add("red")}function y(){u.classList.add("red")}function G(){d.classList.remove("red")}function F(){u.classList.remove("red")}const f=document.querySelector(".go-top");f.addEventListener("click",N);window.addEventListener("scroll",A);function A(){const o=window.scrollY,e=document.documentElement.clientHeight;o>e?f.classList.add("go-top-show"):f.classList.remove("go-top-show")}function N(){window.scrollTo({top:0,behavior:"smooth"})}k();M();T();x();new p(".swiper",{direction:"horizontal",effect:"flip",speed:1e3,grabCursor:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!1}});const z=document.querySelectorAll(".slide-part-js");z.forEach(o=>{o.insertAdjacentHTML("afterbegin",P())});I();new p(".review-swiper",{direction:"horizontal",loop:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{320:{slidesPerView:1,slidesPerGroup:1,spaceBetween:16},768:{slidesPerView:2,slidesPerGroup:1,spaceBetween:16},1440:{slidesPerView:4,slidesPerGroup:1,spaceBetween:16}}});const U=document.querySelector(".form-footer");U.addEventListener("submit",_);A();
//# sourceMappingURL=commonHelpers.js.map
