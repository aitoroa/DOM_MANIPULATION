// Lógica del menú

// Selección de elementos de HTML

let burger = document.querySelector(".burger > i");
let menu_opt = document.querySelector(".menu");

// Variable para saber si el menú está abierto o cerrado

let isOpen = false;

// Definimos evento click sobre el botón del menú

burger.addEventListener("click", function(){
    // console.log("¡Has hecho click!");
    if (isOpen === false) {
        menu_opt.style.right = "0";
        isOpen = true;
    } else {
        menu_opt.style.right = "-100%";
        isOpen= false;
    } 
});