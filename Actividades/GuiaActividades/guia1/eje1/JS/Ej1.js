/*
Crear un algoritmo que solicite al usuario un número entero positivo. Luego, utilizar un ciclo
para calcular la suma de todos los números pares desde 1 hasta el número ingresado por el
usuario. Mostrar el resultado de la operación en el navegador.
**/


let numero = parseFloat(prompt("Ingresa un número entero positivo:"));
let sumarPar = 0;

if (isNaN(numero) || numero <= 0 || numero % 1 !== 0) {
    document.write("No es correcto")
} else {
    for (let i = 2; i <= numero; i += 2) {
        sumarPar += i;
    }

    document.write("La suma de números pares desde 1 hasta " + numero + " es: " + sumarPar);
}
