// Lógica del menú

// Selección de elementos de HTML

let burger = document.querySelector(".burger > i");
let menu_opt = document.querySelector(".menu");

// Definimos evento click sobre el botón del menú

burger.addEventListener("click", function(){
    burger.classList.toggle("fa-bars");
    burger.classList.toggle("fa-times");
    menu_opt.classList.toggle("menu-show");
});

// Cambio de modo

let btnSwitchMode = document.querySelector(".theme-switch");
btnSwitchMode.addEventListener("click", function(){
    let body = document.querySelector("body");
    let to_dark_mode = document.querySelector(".to-dark-mode");
    let to_light_mode = document.querySelector(".to-light-mode");
    let condition = body.classList.contains("dark-theme");
    if (condition) {
        body.classList.remove("dark-theme");
        body.classList.add("light-theme");
    } else {
        body.classList.remove("light-theme");
        body.classList.add("dark-theme");
    }
    to_light_mode.classList.toggle("hide-cont");
    to_dark_mode.classList.toggle("hide-cont");
});

// Cambiar las imágenes de los gatos

let btnHappy = document.querySelector(".btn-happy");
let btnSad = document.querySelector(".btn-sad");

btnHappy.addEventListener("click", function() {
    let img = document.querySelector(".img-cont > img");
    img.src = "img/happy_cat.jpg";
});

btnSad.addEventListener("click", function() {
    let img = document.querySelector(".img-cont > img");
    img.src = "img/sad_cat.jpg";
});

// Cambiar el fondo animado al hacer hover sobre la imagen

let catImage = document.querySelector(".img-cont > img");
let body = document.querySelector("body");
let body_class = body.classList; 

// Hover sobre la imagen

catImage.addEventListener("mouseover", function() {
    catImage.style.opacity = "0.5";
    if (body_class.contains("dark-theme")) {
        body.classList.add("nighttime-background-anim");
    } else {
        body.classList.add("daytime-background-anim");
    }
});

// Hover fuera de la imagen (cursor sale de la imagen)

catImage.addEventListener("mouseout", function() {
    catImage.style.opacity = "1";
    if (body_class.contains("dark-theme")) {
        body.classList.remove("nighttime-background-anim");
    } else {
        body.classList.remove("daytime-background-anim");
    }
});

// Lógica abrir/cerrar de la ventana modal

let btnOpenModal = document.querySelector("#openModal");
btnOpenModal.addEventListener("click", openModalWindow);

// Función propia para abrir ventana modal

function openModalWindow() {
    let modalWindow = document.querySelector("#modalWindow");
    modalWindow.classList.add("show-modal");
}

let btnCloseModal = document.querySelector("#modalWindow > .modal-content > .close");
btnCloseModal.addEventListener("click", closeModalWindow);

let btnCloseModalAccept = document.querySelector("#modalWindow > .modal-content > .btn-accept");
btnCloseModalAccept.addEventListener("click", closeModalWindow);

function closeModalWindow() {
    let modalWindow = document.querySelector("#modalWindow");
    modalWindow.classList.remove("show-modal");
}

// Cerrar ventana modal cuando se detecta un click fuera de esta

window.addEventListener("click", function(event) {
    // Llama solo a la función de cerrar modal siempre que el click no sea en la propia ventana modal.
    let modal = document.querySelector("#modalWindow");
    if (event.target == modal) {
        closeModalWindow();
    }
});