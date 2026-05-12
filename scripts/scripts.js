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

// Boton para mostrar el formulario de añadir estudios y para agregar un nuevo estudio a la lista

const botonMostrar = document.getElementById("mostrarFormulario");
const formulario = document.getElementById("formularioEstudio");
const botonAgregar = document.getElementById("agregarEstudio");
const lista = document.getElementById("listaEstudios");
const input = document.getElementById("nuevoEstudio");

botonMostrar.addEventListener("click", () => {
    if (formulario.style.display === "none") {
        formulario.style.display = "block";
    } else {
        formulario.style.display = "none";
    }
});

botonAgregar.addEventListener("click", () => {
    const texto = input.value;

    if (texto !== "") {
        const nuevoLi = document.createElement("li");
        nuevoLi.textContent = texto + " ";

        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";

        botonEliminar.addEventListener("click", () => {
            nuevoLi.remove();
        });

        nuevoLi.appendChild(botonEliminar);

        lista.appendChild(nuevoLi);

        input.value = "";

        formulario.style.display = "none";
    }
});