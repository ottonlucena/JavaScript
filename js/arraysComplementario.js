//class
class Almacen {
    constructor(nombre, categoria, precio, stock, utilidad) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = parseInt(precio);
        this.stock = parseInt(stock);
        this.utilidad = parseInt(utilidad);
    }
    multiplicadoIva() {
        return this.precio * 1.21;
    }

    ganancias() {
        return parseInt(this.utilidad / 100 * this.multiplicadoIva());
    }

    totalVenta() {
        return parseInt(this.precio * 1.21 + this.ganancias());
    }
}

//Bienvenida al simulador con variables.
alert("Bienvenido(a), este es un pequeño simulador de productos, donde podrás almacenar: Nombre de producto, Categoria, Precio, Utilidad, IVA y Unidades compradas (STOCK)");
let nombre = prompt("¿ Cúal es tu nombre ?").toUpperCase();
let apellido = prompt("Por favor indicanos tu apellido: ").toUpperCase();
let nombreApellido = nombre + " " + apellido;
alert(`Muy bien ${nombreApellido}, ahora te haremos unas preguntas donde nos indiques los datos de tus productos. `);

//Array de productos.
let productosArray = [];
let contador = 0;
let entrada = alert("¡Comencemos! lee atentamente las siguientes preguntas.");
let condicion = "";
while (condicion !== "SALIR") {
    let nombreProducto = prompt("Ingrese la DESCRIPCIÓN de tu producto.").toUpperCase();
    let categoriProducto = prompt("¿Cuál es la CATEGORIA de tu producto?").toUpperCase();
    let precioProducto = parseInt(prompt("Indicanos el PRECIO $ de tu producto. (PRECIO DE COMPRA)"));
    let stockProducto = parseInt(prompt("Por favor indicanos el STOCK comprado de tu producto. (CANTIDAD)"));
    let utilidadProducto = parseInt(prompt("¿Cuanto deseas agregarle de UTILIDAD a tu producto (PORCENTAJE))?"));
    productosArray.push(new Almacen(nombreProducto, categoriProducto, precioProducto, stockProducto, utilidadProducto));
    condicion = prompt("Desea continuar agregando? SALIR - CONT").toUpperCase();
    contador++;
}alert(`Excelente ${nombreApellido}, tu resultado lo veras a continuación.`);

//Console.log para verificar resultado de Array.
console.log(productosArray);


//for para recorrer y devoler los valores dentro del HTML.
for (let detalle of productosArray) {
    document.write(`<h4>Nombre del producto ingresado: ${detalle.nombre} </h4>`);
    document.write(`<h4>La categoria de tu producto es: ${detalle.categoria} </h4>`);
    document.write(`<h4>Unidades en STOCK ingresadas: ${detalle.stock} </h4>`);
    document.write(`<h4>Precio del producto (COSTO):  $${detalle.precio} </h4>`);
    document.write(`<h4>Costo del producto con IVA (IMPUESTO de 21%) es de: $${detalle.multiplicadoIva()} </h4>`);
    document.write(`<h4>La utilidad con un ${detalle.utilidad}% es de: $${detalle.ganancias()} </h4>`);
    document.write(`<h4>Tú producto tiene un costo de VENTA de: $${detalle.totalVenta()} </h4>`);

}

//Detalle de los productos con STOCK menor a 10 UND.
let stockReducido = [];
stockReducido = productosArray.filter(detalle => detalle.stock <= 10);
console.log("Detalle de producto con STOCK menor a 10 unidades: " + JSON.stringify(stockReducido)); //(detalle por consola).
document.write("<ul><h3>Lista de detalle de productos con STOCK menor a 10 unidades:</h3></ul>");

//Detalle dentro de HTML.
for (let detalle of stockReducido) {
    document.write(`<li><h4>Nombre: ${detalle.nombre} </h4></li>`);
    document.write(`<li><h4>Categoria: ${detalle.categoria} </h4></li>`);
    document.write(`<li><h4>Stock: ${detalle.stock} </h4></li>`);
}

//Detalle de los productos de precio MENOR A MAYOR.
let precioMayor = [];
precioMayor = productosArray.map(posicion => posicion);
precioMayor = productosArray;
productosArray.sort(function (a, b) {
    return a.precio + b.precio;
})

document.write("<h3><ul>Lista de productos ordenados por precio de menor a mayor:</h3></ul>");

//Detalle dentro de HTML.
for (let detalle of precioMayor) {
    document.write("<h4>Nombre: " + detalle.nombre + "</h4>")
    document.write(`<li><h4>Precio: ${detalle.precio} </h4></li>`);
}


//TODOS los console.log para verificar internamente.
for (let detalle of productosArray) {
    console.log(`EL nombre es: ${detalle.nombre}`);
    console.log(`El stock es: ${detalle.stock}`);
    console.log(`El precio es: ${detalle.precio}`);
    console.log(`El costo con IVA es: ${detalle.multiplicadoIva()}`);
    console.log(`La utilidad es: ${detalle.ganancias()}`);
    console.log(`El precio de venta es: ${detalle.totalVenta()}`);
}







