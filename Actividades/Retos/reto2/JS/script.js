document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("Notas-Form");
  const resultDiv = document.getElementById("ImprimirResultados");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const n1 = parseFloat(document.getElementById("nota1").value);
    const n2 = parseFloat(document.getElementById("nota2").value);
    const n3 = parseFloat(document.getElementById("nota3").value);

    const promedio = Promedio(n1, n2, n3);
    const resultado = Categoria(promedio);

    if (resultado === "aprobado") {
      resultDiv.textContent = `Resultado: Alumno aprobado con nota ${promedio}`;
    } else if (resultado === "examen") {
      resultDiv.textContent = `Resultado: Alumno debe rendir examen con nota ${promedio}`;
    } else {
      resultDiv.textContent = `Resultado: Alumno reprobado con nota ${promedio}`;
    }
  });

  //Funcion para obtener el promedio
  function Promedio(n1, n2, n3) {
    return n1 * 0.4 + n2 * 0.3 + n3 * 0.3;
  }

  //Funcion para determinar estado de aprobación alumno
  function Categoria(promedio) {
    if (promedio >= 4.95) {
      return "aprobado";
    } else if (promedio >= 3.95) {
      return "examen";
    } else {
      return "reprobado";
    }
  }
});
