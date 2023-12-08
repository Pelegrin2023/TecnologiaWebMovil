import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Mi Aplicación Flutter',
      home: MyHomePage(),
    );
  }
}

class MyHomePage extends StatefulWidget {
  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _selectedIndex = 0;

  // Widgets para el carrusel y el perfil
  final List<Widget> _widgetOptions = <Widget>[
    CarouselWidget(),
    ProfileWidget(),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Mi App con MiWidget'),
      ),
      body: _widgetOptions.elementAt(_selectedIndex),
      bottomNavigationBar: BottomNavigationBar(
        items: const <BottomNavigationBarItem>[
          BottomNavigationBarItem(
            icon: Icon(Icons.slideshow),
            label: 'Carrusel',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.person),
            label: 'Perfil',
          ),
        ],
        currentIndex: _selectedIndex,
        onTap: _onItemTapped,
      ),
    );
  }

  void _onItemTapped(int index) {
    setState(() {
      _selectedIndex = index;
    });
  }
}

class ProfileWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Icon(
            Icons.account_circle,
            size: 100.0,
            color: Colors.grey,
          ),
          SizedBox(height: 20.0),
          ElevatedButton(
            onPressed: () {
              // Acción cuando se presiona el botón "Editar Perfil"
            },
            child: Text('Editar Perfil'),
          ),
        ],
      ),
    );
  }
}

class CarouselWidget extends StatefulWidget {
  @override
  _CarouselWidgetState createState() => _CarouselWidgetState();
}

class _CarouselWidgetState extends State<CarouselWidget> {
  final PageController _pageController = PageController(initialPage: 0);
  final List<String> imagePaths = [
    'assets/imagen1.jpg',
    'assets/imagen2.jpg',
  ];
  int _currentIndex = 0;

  @override
  void initState() {
    super.initState();
    _startAutoScroll();
  }

  @override
  void dispose() {
    _pageController.dispose();
    super.dispose();
  }

  void _startAutoScroll() {
    Future.delayed(const Duration(seconds: 3), () {
      _pageController.animateToPage(
        (_currentIndex + 1) % imagePaths.length,
        duration: Duration(milliseconds: 500),
        curve: Curves.easeIn,
      );
      _startAutoScroll();
    });
  }

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Container(
            width: MediaQuery.of(context).size.width * 0.8,
            height: 200.0,
            child: PageView.builder(
              controller: _pageController,
              itemCount: imagePaths.length,
              onPageChanged: (index) {
                setState(() {
                  _currentIndex = index;
                });
              },
              itemBuilder: (BuildContext context, int index) {
                return Padding(
                  padding: EdgeInsets.all(8.0),
                  child: Image.asset(
                    imagePaths[index],
                    width: MediaQuery.of(context).size.width * 0.8,
                    fit: BoxFit.cover,
                  ),
                );
              },
            ),
          ),
          SizedBox(height: 20.0),
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: imagePaths.map((url) {
              int index = imagePaths.indexOf(url);
              return Padding(
                padding: EdgeInsets.symmetric(horizontal: 4.0),
                child: InkWell(
                  onTap: () {
                    setState(() {
                      _currentIndex = index;
                      _pageController.animateToPage(
                        _currentIndex,
                        duration: Duration(milliseconds: 500),
                        curve: Curves.easeInOut,
                      );
                    });
                  },
                  child: Icon(
                    index == _currentIndex
                        ? Icons.radio_button_checked
                        : Icons.radio_button_unchecked,
                    size: 16.0,
                  ),
                ),
              );
            }).toList(),
          ),
        ],
      ),
    );
  }
}
