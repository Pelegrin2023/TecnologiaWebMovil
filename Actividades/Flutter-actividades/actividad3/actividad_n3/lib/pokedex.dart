import 'package:flutter/material.dart';

// Clase  para mostrar información de un Pokémon.
class PokemonTile extends StatelessWidget {
  final String name;
  final String type;
  final String pokedexNumber;
  final String imagePath;

  // Constructor para inicializar los atributos.
  PokemonTile({
    required this.name,
    required this.type,
    required this.pokedexNumber,
    required this.imagePath,
  });

  @override
  Widget build(BuildContext context) {
    // Se utiliza SingleChildScrollView para manejar el desbordamiento.
    return SingleChildScrollView(
      child: Column(
        children: [
          // Primer ListTile con la imagen del Pokémon.
          ListTile(
            contentPadding: EdgeInsets.all(16.0),
            leading: Container(
              width: 300.0,
              height: 300.0,
              child: Image.asset(
                imagePath,
                fit: BoxFit.contain,
              ),
            ),
          ),
          // Segundo ListTile con detalles del Pokémon.
          ListTile(
            title: Text(name),
            subtitle: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                PokemonTag(type),
                SizedBox(height: 8.0),
                Text('Número en la Pokédex: $pokedexNumber'),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

// Widget para mostrar el tipo del Pokémon con un tag de color.
class PokemonTag extends StatelessWidget {
  final String type;

  PokemonTag(this.type);

  @override
  Widget build(BuildContext context) {
    // Se obtiene el color correspondiente al tipo del Pokémon.
    Color tagColor = getColorForType(type);

    // Se utiliza un contenedor decorado para mostrar el tag.
    return Container(
      padding: EdgeInsets.symmetric(horizontal: 8.0, vertical: 4.0),
      decoration: BoxDecoration(
        color: tagColor,
        borderRadius: BorderRadius.circular(8.0),
      ),
      child: Text(
        type,
        style: TextStyle(
          color: Colors.white,
        ),
      ),
    );
  }

  // Función que devuelve el color correspondiente a un tipo de Pokémon.
  Color getColorForType(String type) {
    switch (type.toLowerCase()) {
      case 'planta':
        return Colors.green;
      case 'fuego':
        return Colors.orange;
      case 'agua':
        return Colors.blue;
      default:
        return Colors.grey;
    }
  }
}
