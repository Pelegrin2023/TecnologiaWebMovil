/*
* Realizar un programa que permita al usuario ingresar su estatura y peso, para que se
* muestre en el navegador su IMC correspondiente. Además de mostrar el IMC, indicar si está
* en la categoría de: “Bajo Peso”, “Peso Normal” o “Sobrepeso”.
*/

// Función validar que datos no sean nulos
function validarDatos(estatura, peso) {
    if (isNaN(estatura) || isNaN(peso)) {
        return false;
    } else {
        return true;
    }
}

// Función para determinar la categoría de IMC
function determinarCategoria(IMC) {
    if (IMC < 18.5) {
        return "Bajo Peso";
    } else if (IMC >= 18.5 && IMC <= 24.9) {
        return "Peso Normal";
    } else {
        return "Sobrepeso";
    }
}

// Función para calcular el IMC
function calcularIMC(peso, estatura) {
    return peso / (estatura * estatura);
}

const peso = parseFloat(prompt("Ingrese peso en kg: "));
const estatura = parseFloat(prompt("Ingrese estatura en metros: "));

if ((peso > 0 && estatura > 0) && validarDatos(estatura, peso)) {
    const imc = calcularIMC(peso, estatura);
    const categoria = determinarCategoria(imc);
    alert("Su IMC es: " + imc.toFixed(2) + "\nCategoría: " + categoria);
} else {
    alert("ERROR: Ingrese datos válidos");
}
