// ===== MENU MOBILE =====
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.onclick = () => menu.classList.toggle("show");


// ===== SCROLL SUAVE =====
document.querySelectorAll("nav a").forEach(link=>{
 link.onclick = e=>{
  e.preventDefault();
  document.querySelector(link.getAttribute("href"))
  .scrollIntoView({behavior:"smooth"});
  menu.classList.remove("show");
 };
});


// ===== REVEAL ANIMATION =====
const reveals = document.querySelectorAll(".reveal");

function reveal(){
 const h = window.innerHeight;
 reveals.forEach(el=>{
  if(el.getBoundingClientRect().top < h-80){
    el.classList.add("active");
  }
 });
}
window.addEventListener("scroll", reveal);
reveal();


// ===== FORM VALIDATION =====
document.getElementById("contactForm").onsubmit = e=>{
 e.preventDefault();

 const nome = nomeEl.value.trim();
 const email = emailEl.value.trim();
 const msg = mensagemEl.value.trim();

 if(nome.length < 3) return alert("Nome curto");
 if(!email.includes("@")) return alert("Email inválido");
 if(msg.length < 5) return alert("Mensagem curta");

 alert("Mensagem enviada!");
 e.target.reset();
};

const nomeEl = document.getElementById("nome");
const emailEl = document.getElementById("email");
const mensagemEl = document.getElementById("mensagem");


// ===== SISTEMA DE TEMA =====
const select = document.getElementById("themeSelect");

function applyTheme(mode){
 if(mode === "auto"){
  const dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  document.documentElement.setAttribute("data-theme", dark ? "dark":"light");
 } else {
  document.documentElement.setAttribute("data-theme", mode);
 }
 localStorage.setItem("theme", mode);
}

select.onchange = () => applyTheme(select.value);

// carregar salvo
const saved = localStorage.getItem("theme") || "auto";
select.value = saved;
applyTheme(saved);
