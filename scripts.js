const botonTema = document.getElementById("tema");
const iconoTema = document.getElementById("iconoTema");
const temaGuardado = localStorage.getItem("tema");

if (temaGuardado === "claro") {

    document.body.classList.add("light-mode");
    iconoTema.src = "./imagenes/Luna.png";

}

botonTema.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {

        iconoTema.src = "./imagenes/Luna.png";
        localStorage.setItem("tema", "claro");

    } else {

        iconoTema.src = "./imagenes/Sol.png";
        localStorage.setItem("tema", "oscuro");
    }

});