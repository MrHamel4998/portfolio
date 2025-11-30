// script.js
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.createElement("button");
  toggle.textContent = "🌙 Mode sombre";
  toggle.style.position = "fixed";
  toggle.style.bottom = "20px";
  toggle.style.right = "20px";
  toggle.style.padding = "10px 14px";
  toggle.style.border = "none";
  toggle.style.borderRadius = "6px";
  toggle.style.background = "#f5c518";
  toggle.style.cursor = "pointer";
  toggle.style.fontWeight = "600";
  
  document.body.appendChild(toggle);

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggle.textContent = document.body.classList.contains("dark") 
      ? "☀️ Mode clair" 
      : "🌙 Mode sombre";
  });
});