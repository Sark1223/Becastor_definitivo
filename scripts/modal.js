document.addEventListener('DOMContentLoaded', function() {
    var tarjetas = document.querySelectorAll('.card');
    tarjetas.forEach(function(tarjeta, index) {
        tarjeta.addEventListener('click', function() {
            var modalId = 'modalBeca' + (index + 1);
            var modal = document.getElementById(modalId);
            modal.style.display = 'block';
        });
    });

    var cerrarBotones = document.querySelectorAll('.cerrar-modal');
    cerrarBotones.forEach(function(boton) {
        boton.addEventListener('click', function() {
            var modal = boton.closest('.modal');
            modal.style.display = 'none';
        });
    });
});
