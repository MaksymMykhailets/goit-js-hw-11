import{S as f,i as l}from"./assets/vendor-8c59ed88.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const d="43248873-3ce9b820c5f26b6ef0afaa018";function h(t){const r=`https://pixabay.com/api/?${new URLSearchParams({key:d,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true"})}`;return fetch(r).then(s=>{if(!s.ok)throw new Error("Network response was not ok");return s.json()}).then(s=>{if(s.hits.length===0)throw new Error("Sorry, there are no images matching your search query. Please try again!");return s.hits})}const a=document.querySelector(".gallery");function m(t){a.innerHTML="",t.forEach(r=>{const s=`
            <div class="gallery-item">
                <a href="${r.largeImageURL}">
                    <img src="${r.webformatURL}" alt="${r.tags}" />
                </a>
                <div class="image-info">
                    <p>Likes: ${r.likes}</p>
                    <p>Views: ${r.views}</p>
                    <p>Comments: ${r.comments}</p>
                    <p>Downloads: ${r.downloads}</p>
                </div>
            </div>
        `;a.insertAdjacentHTML("beforeend",s)}),new f(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}const p=document.querySelector(".search-form"),i=document.querySelector(".loader");p.addEventListener("submit",y);function y(t){t.preventDefault();const n=document.querySelector(".search-input"),r=n.value.trim();if(!r){u("Search query cannot be empty");return}i.style.display="block",a.innerHTML="",h(r).then(w).catch(b),n.value=""}function u(t){l.error({title:"Error",message:t})}function g(t){l.success({title:"Success",message:t})}function w(t){i.style.display="none",m(t),g("Images loaded successfully")}function b(t){i.style.display="none",u(t.message)}
//# sourceMappingURL=commonHelpers.js.map
