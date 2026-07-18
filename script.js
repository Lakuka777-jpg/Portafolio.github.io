const imagenesModelos = {
    Anatema: [
        "Imagenes/Anatema/Anatema-1.png",
        "Imagenes/Anatema/Anatema-2.png",
        "Imagenes/Anatema/Anatema-3.png"
    ],
    chaA: [
        "Imagenes/chaA/CharacterA-1.png",
        "Imagenes/chaA/CharacterA-2.png",
        "Imagenes/chaA/CharacterA-3.png"
    ],
    CharacterB: [
        "Imagenes/CharacterB/CharacterB-1.png",
        "Imagenes/CharacterB/CharacterB-2.png",
        "Imagenes/CharacterB/CharacterB-3.png"
    ]
};

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