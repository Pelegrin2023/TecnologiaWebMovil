// Funcion para validar que es un numero (modificada para permitir números con comas)
function ValidarNumeros(entrada) {
    return /^(\d+\,)*\d+$/.test(entrada);
}

// funcion para determinar el número mayor
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

const numeroseperados = prompt("Ingrese números enteros separados por comas");

if (numeroseperados === null) {
    alert("Error");
} else {
    if (!ValidarNumeros(numeroseperados)) {
        alert("Por favor, ingrese solo números enteros separados por comas.");
    } else {
        const num = nummax(numeroseperados);
        alert("El número mayor de la lista es " + num);
    }
}

