(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const n={form:document.querySelector("#task-form"),list:document.querySelector("#task-list")};function l(e){return`<li class="task-list-item">
      <button class="task-list-item-btn">Удалить</button>
      <h3>${e.taskName}</h3>
      <p>${e.taskText}</p>
  </li>`}function u(){const e={};return new FormData(n.form).forEach((s,o)=>{e[o]=s}),e}const c="tasks";function f(e){const s=JSON.parse(localStorage.getItem(c))||[];s.push(e),localStorage.setItem(c,JSON.stringify(s))}const m={saveTask:f};n.form.addEventListener("submit",d);function d(e){e.preventDefault();const s=e.currentTarget,o=u();n.list.insertAdjacentHTML("beforeend",l(o)),m.saveTask(o),s.reset()}function p(){const s=JSON.parse(localStorage.getItem("tasks")).map(o=>`<li class="task-list-item">
      <button class="task-list-item-btn">Удалить</button>
      <h3>${o.taskName}</h3>
      <p>${o.taskText}</p>
  </li>`).join("");n.list.insertAdjacentHTML("beforeend",s)}p();
//# sourceMappingURL=commonHelpers.js.map
