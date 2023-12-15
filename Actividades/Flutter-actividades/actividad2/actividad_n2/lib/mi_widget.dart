import 'package:flutter/material.dart';

class MiWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Sedes Universidad De Los Lagos'),
      ),
      body: Column(
        children: [
          // Primera Card
          Card(
            child: Column(
              children: [
                Image.asset('imagenes/1.jpg'),
                Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: Text('Ulagos Sede Osorno'),
                ),
              ],
            ),
          ),
          SizedBox(height: 16), // Espaciador vertical

          // Segunda Card
          Card(
            child: Column(
              children: [
                Image.asset('imagenes/2.jpg'),
                Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: Text('Ulagos Sede Chiloe'),
                ),
              ],
            ),
          ),
          SizedBox(height: 16), // Espaciador vertical

          // Tercera Card
          Card(
            child: Column(
              children: [
                Image.asset('imagenes/3.jpg'),
                Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: Text('Ulagos Sede Puerto Montt'),
                ),
              ],
            ),
          ),
          SizedBox(height: 16), // Espaciador vertical

          // Botón para redirigir a la página de Ulagos
          ElevatedButton(
            onPressed: () {
              // Coloca aquí la lógica para redirigir a la página de Ulagos
              print('Redirigir a la página de Ulagos');
            },
            child: Text('Ir a Ulagos'),
          ),
        ],
      ),
    );
  }
}
