document.getElementById("miImagen").addEventListener("click", function() {
    location.reload();
});

document.getElementById("menuIcon").addEventListener("click", function() {
    var menu = document.getElementById("menuDesplegable");
    if (menu.style.left === "0px") {
        menu.style.left = "-250px"; // Oculta el menú
    } else {
        menu.style.left = "0px"; // Despliega el menú
    }
});

document.getElementById("closeMenu").addEventListener("click", function() {
    var menu = document.getElementById("menuDesplegable");
    menu.style.left = "-250px"; // Oculta el menú
});

document.getElementById("inicio").addEventListener("click", function() {
    location.reload(); // Recarga la página
});

function toggleAccordion(sectionId) {
    var contentRequisitos = document.getElementById('contentRequisitosFooter');
    var contentAcerca = document.getElementById('contentAcercaFooter');

    if (sectionId === 'requisitos') {
        if (contentRequisitos.style.display === 'block') {
            contentRequisitos.style.display = 'none'; // Cierra si ya está abierto
        } else {
            contentRequisitos.style.display = 'block';
            contentAcerca.style.display = 'none';
        }
    } else if (sectionId === 'acerca') {
        if (contentAcerca.style.display === 'block') {
            contentAcerca.style.display = 'none'; // Cierra si ya está abierto
        } else {
            contentAcerca.style.display = 'block';
            contentRequisitos.style.display = 'none';
        }
    }
}

document.getElementById("requisitosMatricula").addEventListener("click", function(event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace
    toggleAccordion('requisitos');
    document.querySelector(".accordion").scrollIntoView({ behavior: 'smooth' });
});

document.getElementById("acercade").addEventListener("click", function(event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace
    toggleAccordion('acerca');
    document.querySelector(".accordion").scrollIntoView({ behavior: 'smooth' });
});

document.getElementById("toggleRequisitosFooter").addEventListener("click", function(event) {
    event.preventDefault();
    toggleAccordion('requisitos');
});

document.getElementById("toggleAcercaFooter").addEventListener("click", function(event) {
    event.preventDefault();
    toggleAccordion('acerca');
});

