$(document).ready(function () {

    document.getElementById("btnCalcular").addEventListener("click", function () {

        // Obtener todos los elementos del DOM con la clase 'needs-validation'
        var forms = document.getElementsByClassName("needs-validation");
        // Filtrar los formularios que han sido marcados como válidos
        var validation = Array.prototype.filter.call(forms, function (form) {
            if (form.checkValidity() === true) {
                // Obtener valores del formulario
                const nombre = document.getElementById('nombre').value;
                const genero = document.getElementById('selgenero').value;
                const actividadFisica = document.getElementById('selActividad').value;
                const peso = parseFloat(document.getElementById('peso').value);
                const altura = parseFloat(document.getElementById('altura').value);
                const edad = parseInt(document.getElementById('edad').value);

                //Obtener Datos
                const imc = calcularIMC(peso, altura);
                const clasificacion = obtenerClasificacionIMC(imc);
                const gastoEnergetico = calcularGastoEnergetico(actividadFisica, peso) + "Kcal";
                const estadoNutricional = obtenerEstadoNutricional(imc);

                // Mostrar resultados
                document.getElementById('resNombre').innerText = nombre;
                document.getElementById('resImc').innerText = imc;
                document.getElementById('resClasificación').innerText = clasificacion;
                document.getElementById('ResGasto').innerText = gastoEnergetico;
                document.getElementById('resEstado').innerText = estadoNutricional;

            } 
            // else {
            //     console.log("Formulario no válido");
            // }
            // Marcar el formulario como validado para mostrar mensajes de validación
            form.classList.add('was-validated')
            
        });
    });

    $("#btnLimpiar").on("click", function () {
        // Limpiar formulario
        $("#nombre").val("");
        $("#selgenero").val("");
        $("#selActividad").val("");
        $("#peso").val("");
        $("#altura").val("");
        $("#edad").val("");

        // Limpiar salida resultados 
        $("#resNombre").text("");
        $("#resImc").text("");
        $("#resClasificación").text("");
        $("#ResGasto").text("");
        $("#resEstado").text("");
    });


});


// Función para calcular el IMC
function calcularIMC(peso, altura) {
    return (peso / (altura * altura)).toFixed(2);
}

// Función para clasificacion de IMC
function obtenerClasificacionIMC(imc) {
    if (imc < 18.5) {
        return 'Bajo Peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        return 'Peso Normal';
    } else if (imc >= 25 && imc < 29.9) {
        return 'Sobrepeso';
    } else {
        return 'Obesidad';
    }
}

// Función para calcular el gasto energético diario
function calcularGastoEnergetico(actividadFisica, peso) {
    return (actividadFisica * peso).toFixed(2);
}

// Función para obtener el estado nutricional
function obtenerEstadoNutricional(imc) {
    if (imc < 18.5) {
        return 'Necesita Mejorar';
    } else if (imc >= 18.5 && imc < 24.9) {
        return 'Saludable';
    } else if (imc >= 25 && imc < 29.9) {
        return 'Necesita atención especializada';
    } else {
        return 'Necesita atencion especializada Urgente';
    }
}

