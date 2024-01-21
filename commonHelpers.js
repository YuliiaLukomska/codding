(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const l={form:document.querySelector("#task-form"),list:document.querySelector("#task-list")};l.form.addEventListener("submit",u);function u(o){o.preventDefault();const r=o.currentTarget,s=r.elements.taskName.value,n=r.elements.taskText.value;l.list.insertAdjacentHTML("beforeend",c(s,n))}function c(o,r){return`<li class="task-list-item">
      <button class="task-list-item-btn">Удалить</button>
      <h3>${o}</h3>
      <p>${r}</p>
  </li>`}
//# sourceMappingURL=commonHelpers.js.map
