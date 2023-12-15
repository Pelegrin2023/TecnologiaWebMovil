import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('Ejemplo flutter'),
        ),
        body: Center(
          //Boton es centrado en la mitad de la pantalla
          child: ElevatedButton(
            onPressed: () {
              print('¡Hola Mundo!');
            },
            child: Text('Presiona para saludar'),
          ),
        ),
      ),
    );
  }
}
