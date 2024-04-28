var activo = false;
const menu_desplegable = document.getElementById('menu-desplegable');

document.querySelector('.nav-links .bx-menu').addEventListener("click", () => {
    if (activo === false) {
        activo = true;
        menu_desplegable.style.display = "block";
    } else {
        activo = false;
        menu_desplegable.style.display = "none";
    }
});

const contenedor_opciones = document.getElementById('contenedor_opciones');
var alto =  window.innerHeight -180;
contenedor_opciones.style.maxHeight = alto + 'px';