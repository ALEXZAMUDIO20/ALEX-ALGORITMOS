console.log("7mo ejercicio");

function contarvocales(texto) {
    return texto.replace(/[aeiouAEIOUáéíóúÁÉÍÓÚ]/g, "").length;
}
Y = prompt("Ingresa cualquier frase...veras la cantidad de vocales que tiene esta")
console.log(contarvocales(Y));