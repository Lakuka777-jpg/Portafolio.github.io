const imagenesModelos = {
    anatema: [
        "images/Anatema/Anatema-1.png",
        "images/Anatema/Anatema-2.png",
        "images/Anatema/Anatema-3.png"
    ]
}

function cambiarImagen(boton, direccion) {
    const carrusel = boton.parentElement;
    const img = carrusel.querySelector(".carrusel-img");
    
    // Saca el nombre del modelo desde la carpeta de la imagen actual
    const rutaActual = img.getAttribute("src");
    const nombreModelo = rutaActual.split("/")[1];
    const lista = imagenesModelos[nombreModelo];
    
    let indice = parseInt(img.getAttribute("data-indice"));
    indice = (indice + direccion + lista.length) % lista.length;
    
    img.setAttribute("src", lista[indice]);
    img.setAttribute("data-indice", indice);
}