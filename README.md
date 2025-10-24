# DOM_MANIPULATION

Para definir un evento sobre un elemento de HTML, podemos usar la función built-in de JS llamada -> addEventListener()

Existen dos funciones built-in de JS muy útiles para trabajar con clases de CSS:

- classList -> me devuelve la clase o clases que tiene asignadas.
- classList.add() -> me permite añadir una clase a la lista de clases de un elemento del DOM.
- classList.remove() -> me permite eliminar una clase a la lista de clases de un elemento del DOM.

Función built-in de JS que me permite saber si una cadena de caracteres está contenida dentro de otra cadena más grande.

"Hola, buenos días. ¿Qué tal?"

contains()

## PRIMERA VERSIÓN DEL MENÚ RESPONSIVE:

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

## SEGUNDA VERSIÓN DEL MENÚ RESPONSIVE:

// Lógica del menú

// Selección de elementos de HTML
let burger = document.querySelector(".burger > i");
let menu_opt = document.querySelector(".menu");

// Definimos evento click sobre el botón del menú
burger.addEventListener("click", function(){
    let isOpen = menu_opt.classList.contains("menu-show");
    if (isOpen === false) {
        menu_opt.classList.add("menu-show");
        burger.classList.remove("fa-bars");
        burger.classList.add("fa-times");
    } else {
        menu_opt.classList.remove("menu-show");
        burger.classList.remove("fa-times");
        burger.classList.add("fa-bars");
    } 
});

## Función built-in toggle() de JS

https://www.w3schools.com/howto/howto_js_toggle_class.asp

Esta función me permite añadir o quitar una clase a un elemento de HTML. La propia función detecta si tiene o no tiene la clase y la añade o la quita.