let searchPhrase = '';
    
function handleSearch(event) {
    if (event.key === 'Enter') {
        searchPhrase = event.target.value.toLowerCase();
        performSearch();
    }
}

function performSearch() {
    var allText = document.body.innerText.toLowerCase();
    var cards = document.getElementsByClassName('card');

    if (searchPhrase.length === 0) {
        // Restablecer la búsqueda
        window.find('', false, true);
        showAllCards(cards);
    } else {
        // Realizar la búsqueda
        if (allText.includes(searchPhrase)) {
            window.find(searchPhrase, false, true);
            filterCards(cards);
        } else {
            alert('No se encontraron coincidencias.');
        }
    }
}

function filterCards(cards) {
    Array.from(cards).forEach(card => {
        const paragraph = card.querySelector('p');
        const dependencia = card.querySelector('h3');
        if ((paragraph && paragraph.innerText.toLowerCase().includes(searchPhrase)) || (dependencia && dependencia.innerText.toLowerCase().includes(searchPhrase))) {
            card.style.display = 'block'; // Mostrar la carta si contiene el texto buscado en el párrafo o en el h3
        } else {
            card.style.display = 'none'; // Ocultar la carta si no contiene el texto buscado
        }
    });
}

function showAllCards(cards) {
    Array.from(cards).forEach(card => {
        card.style.display = 'block'; // Mostrar todas las cartas
    });
}

function aplicarBeca() {
    // Seleccionar la carta que se quiere clonar
    const cartaOriginal = document.querySelector('.card');

    // Clonar la carta
    const cartaClonada = cartaOriginal.cloneNode(true);

    // Convertir la carta clonada a HTML para almacenarla en el Local Storage
    const cartaHTML = cartaClonada.outerHTML;

    // Almacenar la carta clonada en el Local Storage
    localStorage.setItem('cartaClonada', cartaHTML);

    // Mostrar mensaje de éxito al usuario
    alert('¡Has aplicado con éxito!');
    var modal = document.getElementsByClassName(".modal");
    modal.style.display = 'none';
}
