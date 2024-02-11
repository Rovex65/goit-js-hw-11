import{S as c,i as l}from"./assets/vendor-7659544d.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();class u{constructor(){this.BASE_URL="https://pixabay.com/api/",this.API_KEY="42308857-af265c382d366c65500552078"}getImages(o){const s=new URLSearchParams({key:this.API_KEY,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}),i=`${this.BASE_URL}?${s}`;return fetch(i).then(e=>e.json())}}const h=document.querySelector(".gallery"),d=new c(".gallery a");function f({webformatURL:t,largeImageURL:o,tags:s,likes:i,views:e,comments:r,downloads:n}){return`      
      <li class="card">
        <a href ="${o}">
        <img class="card-img" src="${t}" alt="${s}" >
        <ul class="card-data">
          <li><h3>Likes</h3><p>${i}</p></li>
          <li><h3>Views</h3><p>${e}</p></li>
          <li><h3>Comments</h3><p>${r}</p></li>
          <li><h3>Downloads</h3><p>${n}</p></li>
        </ul>
      </li>`}function m(t){return t.map(f).join("")}function p(t){h.innerHTML=m(t),d.refresh()}const g=new u,y=document.querySelector(".search-form"),L=document.querySelector(".gallery"),S=document.querySelector(".loader");y.addEventListener("submit",b);function b(t){t.preventDefault(),L.innerHTML="",a(),g.getImages(t.target.query.value).then(o=>{const s=o.hits;if(!s.length)throw new Error("Sorry, there are no images matching your search query. Please try again!");p(s)}).catch(o=>P(o)).finally(a),t.target.reset()}function P(t){l.error({pauseOnHover:!1,position:"topRight",message:t.message})}function a(){S.classList.toggle("hidden")}
//# sourceMappingURL=commonHelpers.js.map
