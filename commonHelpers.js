import{A as l,S as c}from"./assets/vendor-82e70d45.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function u(){document.addEventListener("DOMContentLoaded",function(){new l(".accordion-container",{duration:300,showMultiple:!1,collapse:!0})}),document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".aboutme-ac-trigger").forEach(s=>{s.addEventListener("click",function(){const r=this.closest(".aboutme-ac"),o=this.querySelector(".aboutme-accordeon-svg use");r.classList.contains("is-active")?o.setAttribute("href","../img/icons.svg#icon-Vector9"):o.setAttribute("href","../img/icons.svg#closed-accordeon")})})})}function p(){document.addEventListener("DOMContentLoaded",function(){document.querySelector(".swiper-slide"),new c(".swiper-container",{navigation:{nextEl:".swiper-button-next"},loop:!0,keyboard:{enabled:!0},breakpoints:{320:{slidesPerView:2,slidesPerGroup:1},768:{slidesPerView:3,slidesPerGroup:1},1440:{slidesPerView:6,slidesPerGroup:1}},on:{slideChange:function(){const r=document.querySelectorAll(".aboutme-swiper-slide li");r.forEach(e=>{e.style.backgroundColor=""});const o=r[this.activeIndex];o.style.backgroundColor="#ed3b44"}}});let n=1;function s(){const r=document.querySelector(".aboutme-button-1440"),o=document.querySelectorAll(".aboutme-swiper-slide li"),e=Array.from(o);r.addEventListener("click",t);function t(){e.forEach((i,d)=>{i.style.backgroundColor=d===n?"#ed3b44":"transparent"}),n=(n+1)%e.length}}s()})}function a(){new l(".faq-accordion-container",{duration:300,showMultiple:!0,collapse:!0})}document.addEventListener("DOMContentLoaded",a);const f=[{codeItemOne:"#react",codeItemTwo:"#js",codeItemThree:"#node js",codeItemFour:"#git",text:"Programming Across Borders: Ideas, Technologies, Innovations",btnHref:"./index.html",btnText:"See project"}];function m(){return f.map(({codeItemOne:n,codeItemTwo:s,codeItemThree:r,codeItemFour:o,text:e,btnHref:t,btnText:i})=>`<div class="top-part">
            <ul class="code-list">
              <li class="code-item">
                <p class="code-text">${n}</p>
              </li>
              <li class="code-item">
                <p class="code-text">${s}</p>
              </li>
              <li class="code-item">
                <p class="code-text">${r}</p>
              </li>
              <li class="code-item">
                <p class="code-text">${o}</p>
              </li>
            </ul>
            <p class="main-text">
              ${e}
            </p>
            <a href="${t}" class="main-button-a" target="_blank"
              >${i}</a
            >
          </div>`).join("")}u();p();a();new c(".swiper",{direction:"horizontal",effect:"flip",speed:1e3,grabCursor:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!1}});const b=document.querySelectorAll(".slide-part-js");b.forEach(n=>{n.insertAdjacentHTML("afterbegin",m())});new c(".reviews-swiper",{direction:"horizontal",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});
//# sourceMappingURL=commonHelpers.js.map
