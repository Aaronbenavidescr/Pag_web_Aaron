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

document.getElementById("requisitosMatricula").addEventListener("click", function(event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace
    var imagenMatriculaContainer = document.getElementById("imagenMatriculaContainer");
    imagenMatriculaContainer.style.display = "block"; // Muestra el contenedor de la imagen
    var imagenacercadeContainer = document.getElementById("imagenacercadeContainer");
    imagenacercadeContainer.style.display = "none"; // Oculta la imagen de Acerca de si está visible
    var menu = document.getElementById("menuDesplegable");
    menu.style.left = "-250px"; // Oculta el menú
});

document.getElementById("inicio").addEventListener("click", function() {
    location.reload(); // Recarga la página
});

document.getElementById("acercade").addEventListener("click", function(event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace
    var imagenacercadeContainer = document.getElementById("imagenacercadeContainer");
    imagenacercadeContainer.style.display = "block"; // Muestra el contenedor de la imagen
    var imagenMatriculaContainer = document.getElementById("imagenMatriculaContainer");
    imagenMatriculaContainer.style.display = "none"; // Oculta la imagen de Requisitos de matrícula si está visible
    var menu = document.getElementById("menuDesplegable");
    menu.style.left = "-250px"; // Oculta el menú
});
