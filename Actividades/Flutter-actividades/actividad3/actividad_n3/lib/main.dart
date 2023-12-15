import 'package:flutter/material.dart';
import 'package:carousel_slider/carousel_slider.dart';
import 'pokedex.dart';

class Pokedex extends StatelessWidget {
  final List<Map<String, String>> pokemons = [
    {
      'name': 'Charmander',
      'type': 'Fuego',
      'pokedexNumber': '004',
      'imagePath': 'assets/charmander.png'
    },
    {
      'name': 'Bulbasaur',
      'type': 'Planta',
      'pokedexNumber': '  001',
      'imagePath': 'assets/bulbasaur.jpg'
    },
    {
      'name': 'Squirtle',
      'type': 'Agua',
      'pokedexNumber': '007',
      'imagePath': 'assets/squirtle.jpg'
    },
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Pokédex'),
      ),
      body: CarouselSlider(
        options: CarouselOptions(
          height: 300.0,
          enlargeCenterPage: true,
          enableInfiniteScroll: true,
        ),
        items: pokemons.map((pokemon) {
          return PokemonTile(
            name: pokemon['name']!,
            type: pokemon['type']!,
            pokedexNumber: pokemon['pokedexNumber']!,
            imagePath: pokemon['imagePath']!,
          );
        }).toList(),
      ),
    );
  }
}

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Mi Aplicación Pokémon',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: Pokedex(),
    );
  }
}
