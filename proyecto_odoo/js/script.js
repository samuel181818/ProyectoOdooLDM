document.addEventListener("DOMContentLoaded", function () {
    let boton = document.querySelector(".menu-button button");
    let menu = document.querySelector(".menu");

    if (boton && menu) {
        boton.addEventListener("click", function () {
            menu.classList.toggle("show");
        });
    }

    let paginaActual = window.location.pathname.split("/").pop();
    if (paginaActual === "" || paginaActual === "/") {
        paginaActual = "index.html";
    }

    let enlaces = document.querySelectorAll("nav a");
    enlaces.forEach(function (enlace) {
        if (enlace.getAttribute("href") === paginaActual) {
            enlace.classList.add("activo");
        }
    });
});

function mostrarMenu() {
    let menu = document.querySelector(".menu");
    if (menu) {
        menu.classList.toggle("show");
    }
}

window.addEventListener("scroll", function () {
    let boton = document.getElementById("subirArriba");
    if (boton) {
        if (window.scrollY > 250) {
            boton.style.display = "block";
        } else {
            boton.style.display = "none";
        }
    }
});

function subirArriba() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
