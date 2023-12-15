document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('determinar-form');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const num = parseInt(document.getElementById('numero').value);
        
        // Llamar a funcion ParOIMPAR
        const result = ParOImpar(num);
        
        if (result === 'par') {
            resultDiv.textContent = `${num} es un número par.`;
        } else {
            resultDiv.textContent = `${num} es un número impar.`;
        }
    });

    // Función que determina si un número es par o impar.
    function ParOImpar(n) {
        if (n % 2 === 0) {
            return 'par';
        } else {
            return 'impar';
        }
    }
});
