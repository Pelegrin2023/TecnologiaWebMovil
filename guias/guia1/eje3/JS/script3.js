/*
Crear un programa que solicite al usuario una contraseña y verifique si cumple con ciertos
criterios de seguridad. La contraseña debe cumplir con los siguientes requisitos para
considerarse válida:
a. Debe tener al menos 8 caracteres de longitud.
b. Debe contener al menos una letra mayúscula.
c. Debe contener al menos un número.
d. Debe incluir al menos un carácter especial, como: !@#$%^&*()_+{}[]:;<>,.?~\-
Se debe mostrar un mensaje en el navegador indicando si la contraseña ingresada es válida
o no, según los criterios mencionados. Si la contraseña cumple con todos los criterios, se
mostrará un mensaje de "La contraseña es válida". De lo contrario, se mostrará un mensaje
que indica que la contraseña no cumple con los requisitos de seguridad.
**/
function validacion(input) {
  //Retorna falso en caso de no cumplir con algunos de requisitos  
  if (input.length < 8) {
    return false;
  }
  if (!/[A-Z]/.test(input)) {
    return false;
  }
  if (!/[0-9]/.test(input)) {
    return false;
  }
  if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\]/.test(input)) {
    return false;
  }

  // Si cumple con todos los requisitos, la contraseña es válida.
  return true;
}

let contrasena = prompt(
  "Ingrese una contraseñan que cumpla con los siguientes requistos:" +
    "\na. Debe tener al menos 8 caracteres de longitud." +
    "\nb. Debe contener al menos una letra mayúscula." +
    "\nc. Debe contener al menos un número." +
    "\nd. Debe incluir al menos un carácter especial, como: !@#$%^&*()_+{}[]:;<>,.?~-"
);

if (validacion(contrasena)) {
  alert("Contraseña valida ");
} else {
  alert("contraseña no cumple con los requisitos minimos de seguridad");
}
