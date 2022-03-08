class Almacen {
    constructor(nombre, categoria, precio, stock, utilidad) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = parseInt(precio);
        this.stock = parseInt(stock);
        this.utilidad = parseInt(utilidad);
    }
    totalIva() {
        return this.precio * 1.21;
    }

    totalPrecio() {
        return parseInt(this.utilidad / 100 * this.totalIva());
    }
}

//Bienvenida al simulador con variables.
alert("Bienvenido(a), este es un pequeño simulador de productos, donde podrás almacenar: Nombre de producto, Categoria, Precio, IVA y Unidades compradas (STOCK)");
let nombre = prompt("¿ Cúal es tu nombre ?").toUpperCase();
let apellido = prompt("Por favor indicanos tu apellido: ").toUpperCase();
let nombreApellido = nombre + " " + apellido;
alert(`Muy bien ${nombreApellido}, ahora te haremos un QUIZZ donde nos indiques los datos de tus productos - HASTA 3 INGRESOS - `);

//Array de productos.
let productosArray = [];
let entrada = prompt("Ingrese el nombre de su producto. (Si desea finalizar presione ESC) ").toUpperCase();
for (let i = 0; i <= 2; i++) {
    if (entrada != "ESC") {
        let nombreProducto = entrada;
        let categoriProducto = prompt("¿Cuál es la categoria de tu producto?").toUpperCase();
        let precioProducto = parseInt(prompt("Indicanos el precio de tu producto. (PRECIO DE COMPRA)"));
        let stockProducto = prompt("Por favor indicanos el stock comprado de tu producto. (CANTIDAD)");
        let utilidadProducto = parseInt(prompt("¿Cuanto deseas agregarle de UTILIDAD a tu producto (PORCENTAJE)?"));
        productosArray.push(new Almacen(nombreProducto, categoriProducto, precioProducto, stockProducto, utilidadProducto));
        if (i === 0) {
            entrada = prompt("Por favor indicanos el Segundo nombre de tu producto.").toUpperCase();
        } if (i === 1) {
            entrada = prompt("Por favor indicanos el Tercer nombre de tu producto.").toUpperCase();
        }
    } else {
        let salir = prompt(`${nombreApellido} ¿Desea salir?`).toUpperCase();
        if (salir == "SI") {
            alert("Hasta luego!!")
            break
        } else {
            entrada = prompt("Vuelva a ingresar el nombre de su producto.").toUpperCase();
        }
    }
}

//Console.log para verificar resultado de Array.
console.log(productosArray);