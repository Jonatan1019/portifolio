// ================= MENU MOBILE =================
// Seleciona botão e menu
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

// Ao clicar abre/fecha menu
hamburger.addEventListener("click", () => {
    menu.classList.toggle("show");
});


// ================= SCROLL SUAVE =================
// Faz links do menu rolarem suave
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: "smooth"
        });

        // Fecha menu no mobile após clique
        menu.classList.remove("show");
    });
});


// ================= ANIMAÇÃO AO APARECER =================
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    const windowHeight = window.innerHeight;

    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;

        if (top < windowHeight - 100) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


// ================= VALIDAÇÃO FORMULÁRIO =================
document.getElementById("contactForm")
.addEventListener("submit", function(e) {

    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const msg = document.getElementById("mensagem").value.trim();

    if (nome.length < 3) {
        alert("Nome muito curto");
        return;
    }

    if (!email.includes("@")) {
        alert("Email inválido");
        return;
    }

    if (msg.length < 5) {
        alert("Mensagem muito curta");
        return;
    }

    alert("Mensagem enviada com sucesso!");
    this.reset();
});
