

alert("Bienvenido(a), este es un pequeño programa donde puedes calcular Ganancias, Costo más IVA y Costo total del producto con la utilidad que desees..");
let nombre = prompt("¿ Cúal es tu nombre ?").toUpperCase();
let apellido = prompt("Por favor indicanos tu apellido: ").toUpperCase();
let nombreApellido = nombre + " " + apellido;
alert(`Muy bien ${nombreApellido}, ahora te haremos unas breves preguntas para que puedas ver tu resultado final del producto!`);

let costo = parseInt(prompt(`${nombreApellido}, indicanos el costo de tu producto: `));
let ivaPais = parseInt(prompt("¿ Cuanto es el IVA (impuesto) en tu pais ?"));
let iva = (ivaPais / 100);
const sumaIva = (x, y) => x * y;
const sumaTotal = (m, r) => m / 100

const resultado = (a, b, c) => {
    return sumaIva(costo, iva) + costo
}

alert(`El precio final de tu producto es de "$${resultado()}" sin ninguna utilidad. `);
let ganancias = prompt("¿ Deseas agregarle un margen de utilidad ? (Si - No) ").toUpperCase();
if (ganancias == "SI") {
    let margen = prompt("¿ Cuanto es el margen que deseas agregarle ? (Indique número)")
    let utilidad = sumaTotal(margen, 100) * resultado() 
    let total = sumaTotal(margen, 100) * resultado() + resultado();
    alert(`Tu utilidad es de: $${utilidad}`)
    alert(`${nombreApellido}, el precio total de venta de tu producto es de: $${total} `)
    console.log(total)
} else {
    alert(`Hasta luego ${nombreApellido}, muchas gracias por confiar en nosotros!`)
}


console.log(resultado());





