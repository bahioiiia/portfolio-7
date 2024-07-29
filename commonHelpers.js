import{A as l,S as a}from"./assets/vendor-82e70d45.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();function p(){document.addEventListener("DOMContentLoaded",function(){new l(".accordion-container",{duration:300,showMultiple:!0})}),document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".aboutme-ac-trigger").forEach(t=>{t.addEventListener("click",function(){const n=this.closest(".aboutme-ac"),s=this.querySelector(".aboutme-accordeon-svg use");n.classList.contains("is-active")?s.setAttribute("href","./img/icons.svg#icon-Vector9"):s.setAttribute("href","./img/icons.svg#closed-accordeon")})})})}function f(){document.addEventListener("DOMContentLoaded",function(){document.querySelector(".swiper-slide"),new a(".swiper-container",{navigation:{nextEl:".swiper-button-next"},loop:!0,keyboard:{enabled:!0},breakpoints:{320:{slidesPerView:2,slidesPerGroup:1},768:{slidesPerView:3,slidesPerGroup:1},1440:{slidesPerView:6,slidesPerGroup:1}},on:{slideChange:function(){const n=document.querySelectorAll(".aboutme-swiper-slide p");n.forEach(e=>{e.style.backgroundColor=""});const s=n[this.activeIndex];s.style.backgroundColor="#ed3b44"}}});let r=1;function t(){const n=document.querySelector(".aboutme-button-1440"),s=document.querySelectorAll(".aboutme-swiper-slide p"),e=Array.from(s);n.addEventListener("click",o);function o(){e.forEach((c,u)=>{c.style.backgroundColor=u===r?"#ed3b44":"transparent"}),r=(r+1)%e.length}s.forEach(c=>{c.addEventListener("mouseover",i),c.addEventListener("mouseout",d)});function i(){this.style.backgroundColor="#ed3b44"}function d(){this.style.backgroundColor="transparent"}}t()})}function m(){document.addEventListener("DOMContentLoaded",function(){new l(".faq-accordion-container",{duration:300,showMultiple:!0,collapse:!0})}),document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".faq-trigger").forEach(t=>{t.addEventListener("click",function(){this.classList.toggle("is-active")})})})}const g=[{codeItemOne:"#react",codeItemTwo:"#js",codeItemThree:"#node js",codeItemFour:"#git",text:"Programming Across Borders: Ideas, Technologies, Innovations",btnHref:"./index.html",btnText:"See project"}];function w(){return g.map(({codeItemOne:r,codeItemTwo:t,codeItemThree:n,codeItemFour:s,text:e,btnHref:o,btnText:i})=>`<div class="top-part">
            <ul class="code-list">
              <li class="code-item">
                <p class="code-text">${r}</p>
              </li>
              <li class="code-item">
                <p class="code-text">${t}</p>
              </li>
              <li class="code-item">
                <p class="code-text">${n}</p>
              </li>
              <li class="code-item">
                <p class="code-text">${s}</p>
              </li>
            </ul>
            <p class="main-text">
              ${e}
            </p>
            <a href="${o}" class="main-button-a" target="_blank"
              >${i}</a
            >
          </div>`).join("")}const b=document.querySelector(".swiper-wrapper-js");async function h(r){const t=await fetch(r);if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);return t.json()}async function v(){let r=[];try{r=await h("https://portfolio-js.b.goit.study/api/reviews")}catch(t){console.error(t)}r.forEach(t=>{const n=`
        <li class="swiper-slide review-card">
          <img src="${t.avatar_url}" class="review-img" alt="1" width="48" height="48" />
          <p class="review-name">${t.author}</p>
          <p class="review-text">${t.review}</p>
        </li>`;b.insertAdjacentHTML("beforeend",n)})}p();f();m();new a(".swiper",{direction:"horizontal",effect:"flip",speed:1e3,grabCursor:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!1}});const y=document.querySelectorAll(".slide-part-js");y.forEach(r=>{r.insertAdjacentHTML("afterbegin",w())});v();new a(".review-swiper",{direction:"horizontal",loop:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{320:{slidesPerView:1,slidesPerGroup:1},768:{slidesPerView:2,slidesPerGroup:1},1440:{slidesPerView:4,slidesPerGroup:1}}});
//# sourceMappingURL=commonHelpers.js.map
