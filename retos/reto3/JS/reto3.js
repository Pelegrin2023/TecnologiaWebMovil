document.addEventListener("DOMContentLoaded", function(){
    const form = document.getElementById("CalculadoraPropinas-Form");
    const resulDiv = document.getElementById("ImprimirResultados");

    form.addEventListener("submit", function (e){
        e.preventDefault();

        const totalBoleta = parseInt(document.getElementById("total").value);
        const PorcentajePropina = parseFloat(document.getElementById("Porcentaje").value);

        if (ValidarMonto(totalBoleta) && ValidarPorcentaje(PorcentajePropina)) {
            const propina = parseInt(totalBoleta * PorcentajePropina);
            const total = parseInt(CalcularTotal(totalBoleta, PorcentajePropina)); 
            resulDiv.innerHTML = `<p class="resultado">Propina: $ ${propina} CLP</p><p class="resultado">Total a Pagar: $ ${total} CLP</p>`;

        } else {
            resulDiv.textContent = "Error: datos no válidos";
        }
    });
    // Funciones
    // Función para calcular valor total a pagar
    function CalcularTotal(totalBoleta, PorcentajePropina) {
        return totalBoleta + (totalBoleta * PorcentajePropina);
    }
    // Función para validar datos
    function ValidarMonto(valor) {
        return valor >= 0;
    }
    // Función para validar Porcentaje de propinas
    function ValidarPorcentaje(porcentaje) {
        return porcentaje >= 0 && porcentaje <= 1;
    }
});
