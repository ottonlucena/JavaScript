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

    sumaUtilidad(){
        return parseInt(this.utilidad/100 * this.precio + this.precio);
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

//Contenedor Padre.
const contenedorTienda = document.getElementById("contenedorTienda");


//For para recorrer los productos digitados por el usuario.
for (const detalle of productosArray){
    const divProducto = document.createElement("div");
    const nombreProducto = document.createElement("p");
    const catProducto = document.createElement("p");
    const priceProducto = document.createElement("p");
    const stcProducto = document.createElement("p");
    const utilProducto = document.createElement("p");

//Append de cada const creada.
    nombreProducto.append(`Nombre producto: ${detalle.nombre} `);
    catProducto.append(`Categoria producto: ${detalle.categoria} `);
    priceProducto.append(`Precio del producto: ${detalle.precio} `);
    stcProducto.append(`Stock del producto: ${detalle.stock} `);
    utilProducto.append(`Precio más utilidad: ${detalle.sumaUtilidad()} `);
    

//Clases de cada const.
    nombreProducto.className = "nameProducto";
    catProducto.className = "nameCat";
    priceProducto.className = "nameProd";
    stcProducto.className = "nameStoc";
    utilProducto.className = "nameUtil"

//Appen container y divProducto.
    divProducto.append(nombreProducto,catProducto,priceProducto,stcProducto,utilProducto);
    contenedorTienda.append(divProducto);
}






