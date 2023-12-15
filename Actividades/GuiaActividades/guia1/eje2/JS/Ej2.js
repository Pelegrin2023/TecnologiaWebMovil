/*
Desarrollar un contador de palabras, solicitando al usuario que ingrese una oración, para
luego contar cuántas palabras hay en la oración. Mostrar la oración ingresada y el número
de palabras en el navegador.
**/


function contarPalabras() {
  let oracion = document.getElementById("oracionIng").value;
  let palabras = oracion.split(/\s+/);
  let numeroPalabras = palabras.length;

  document.getElementById("resultado").textContent = "Oracion ingresada: " + oracion ;
  document.getElementById("resultado").textContent += "\nNumero de palabras: " + numeroPalabras;
}
