/*
Desarrollar un algoritmo que permita ingresar un objeto representando un inventario de
productos. Cada producto en el inventario debe tener como propiedades un nombre, un
precio, y una cantidad de stock en formato de número entero. Se debe recorrer el inventario
y verificar si el stock de alguno de los productos es inferior a 1000 unidades. Si existe algún
producto con stock crítico (menos de 1000 unidades), mostrará un mensaje indicando cuál
es ese producto y que el stock es crítico. Si todos los productos tienen un stock igual o
superior a 1000 unidades, el programa mostrará un mensaje que indique que el inventario
está en buen estado.
**/

class Producto {
    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = parseInt(precio);
        this.stock = parseInt(stock);
    }

    verDescripcion() {
        alert("Nombre Producto: " + this.nombre + "\nPrecio: " + this.precio + "\nStock: " + this.stock);
    }
}

function determinaStock(productos) {
    let stockBuenEstado = true;

    for (let i = 0; i < productos.length; i++) {
        if (productos[i].stock < 1000) {
            alert(`El producto ${productos[i].nombre} tiene un stock crítico de ${productos[i].stock} unidades.`);
            stockBuenEstado = false;
        }
    }

    if (stockBuenEstado) {
        alert("El inventario está en buen estado.");
    }
}

const inventario = [
    new Producto("Producto 1", 10000, 1000),
    new Producto("Producto 2", 5000, 200),
    new Producto("Producto 3", 16000, 20),
    new Producto("Producto 4", 32000, 1500)
];

determinaStock(inventario);

