/**
 * Solicitar al usuario que ingrese una serie de números separados por comas. Encontrar y mostrar el número más grande entre los números ingresados.
 */

// Funcion para validar que es un numero
function ValidarNumeros(entrada) {
    return /^\d+$/.test(entrada);
}

// funcion para determinar numero mayor
function nummax(listNumeros) {
    const numeros = listNumeros.split(',');

    let max = parseInt(numeros[0]);

    for (let i = 0; i < numeros.length; i++) {
        const numero = parseInt(numeros[i]);
        if (numero > max) {
            max = numero;
        }
    }
    return max;
}

const numeroseperados = prompt("Ingrese numeros enteros separados por comas");

if (numeroseperados === null) {
    alert("error");
} else{
    if (!ValidarNumeros(numeroseperados)) {
        alert("Por favor, ingrese solo números enteros ." + numeroseperados);
    } else {
        const num = nummax(numeroseperados);
        alert("el numero mayor de lista es " + num);
    }
}

