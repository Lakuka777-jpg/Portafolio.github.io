const imagenesModelos = {
    Anatema: [
        "Imagenes/Anatema/Anatema-1.png",
        "Imagenes/Anatema/Anatema-2.png",
        "Imagenes/Anatema/Anatema-3.png"
    ],
    Characters: [
        "Imagenes/Characters/Characters-1.png",
        "Imagenes/Characters/Characters-2.png",
        "Imagenes/Characters/Characters-3.png"
    ],
    BatallaDeSanFrancisco: [
        "Imagenes/BatallaDeSanFrancisco/BSF-1.png",
        "Imagenes/BatallaDeSanFrancisco/BSF-2.png",
        "Imagenes/BatallaDeSanFrancisco/BSF-3.png",
        "Imagenes/BatallaDeSanFrancisco/BSF-4.png",
        "Imagenes/BatallaDeSanFrancisco/BSF-5.png"
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