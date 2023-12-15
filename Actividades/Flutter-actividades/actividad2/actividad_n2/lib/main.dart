import 'package:flutter/material.dart';
import 'mi_widget.dart'; // Asegúrate de ajustar el nombre según tu configuración

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: MiWidget(), // Llama al widget MiWidget desde aquí
    );
  }
}
