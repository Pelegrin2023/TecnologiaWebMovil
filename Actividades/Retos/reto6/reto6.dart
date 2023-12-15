import 'dart:io';

//Funcion que retorna true si el numero es par y si no lo es retorna false
bool determinarPar(int numero){
  if (numero % 2 == 0){
    return true;
  }else{
    return false;
  }
}

//Ffuncion que retorna false si el numero no es primo y true si el numero es primo
bool determinarPrimo(int numero) {
  if (numero <= 1) {
    return false;
  } else {
    for (int i = 2; i <= numero / 2; i++) {
      if (numero % i == 0) {
        print("Validar: $numero / $i : ${numero / i}");
        return false;
      }
    }
  }
  return true;
}

main() {
  // Solicitando un número por teclado
  print('Ingrese un número entero mayor a cero: ');
  
  try {
    int numero = int.parse(stdin.readLineSync()!);
  
    if (numero >= 0) {
      print("Resultado:");
  
      if (determinarPar(numero)) {
        print("El número $numero es par");
      } else {
        print("El número $numero es impar");
      }
  
      if (determinarPrimo(numero)) {
        print("El número $numero es primo");
      } else {
        print("El número $numero no es primo");
      }
    } else {
      print("Ingrese un valor válido!!");
    }
  } catch (e) {
    print("Error: Ingrese un número entero válido.");
  }
  
}