document.addEventListener("DOMContentLoaded", () => {
  const container =
    document.querySelector("article.bd-article") ||
    document.querySelector("#main-content");
  if (!container) return;

  const s = document.createElement("script");
  s.src = "https://giscus.app/client.js";
  s.async = true;
  s.crossOrigin = "anonymous";
  const attrs = {
    "data-repo": "Basics2022/bbooks-physics-continuum-mechanics",
    "data-repo-id": "R_kgDONBv50Q",
    "data-category": "Announcements",
    "data-category-id": "DIC_kwDONBv50c4DKwLA",
    "data-mapping": "pathname",
    "data-reactions-enabled": "1",
    "data-input-position": "bottom",
    "data-theme": "preferred_color_scheme",
    "data-lang": "en",
  };
  for (const [k, v] of Object.entries(attrs)) s.setAttribute(k, v);
  container.appendChild(s);
});


// <script src="https://giscus.app/client.js"
//         data-repo="Basics2022/bbooks-physics-continuum-mechanics"
//         data-repo-id="R_kgDONBv50Q"
//         data-category="Announcements"
//         data-category-id="DIC_kwDONBv50c4DKwLA"
//         data-mapping="pathname"
//         data-strict="0"
//         data-reactions-enabled="1"
//         data-emit-metadata="0"
//         data-input-position="bottom"
//         data-theme="preferred_color_scheme"
//         data-lang="en"
//         crossorigin="anonymous"
//         async>
// </script>
