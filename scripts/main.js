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

document.getElementById("requisitosMatricula").addEventListener("click", function(event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace
    var titulorequisitomatricula = document.getElementById("titulorequisitomatricula");
    var titulorequisitomatriculaPosition = titulorequisitomatricula.offsetTop;
    window.scrollTo({
        top: titulorequisitomatriculaPosition,
        behavior: 'smooth'
    });
});

document.getElementById("acercade").addEventListener("click", function(event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace
    var tituloacercade = document.getElementById("tituloacercade");
    var tituloacercadePosition = tituloacercade.offsetTop;
    window.scrollTo({
        top: tituloacercadePosition,
        behavior: 'smooth'
    });
});
