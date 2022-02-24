

let tutor = "DIEGO";
let alumno = "OTTON";
let nombre = prompt("!Hola!, ingresa nombre TUTOR O ALUMNO para verificar que perteneces a nuestra camada.").toUpperCase();

for (let i = 0; i <= 3; i++) {
    if (nombre !== tutor && nombre !== alumno) {
        alert("Por favor ingresa un nombre correcto dentro de nuestra camada.")
        nombre = prompt("Ingrese nuevamente su nombre").toUpperCase();
        if (i === 3) {
            alert("UPPPS... Al parecer no pertenece a nuestra camada.")
        }
    } else {
        alert(`¡ESTAS DENTRO DE LA MEJOR CAMADA ${nombre}!`)
        break
    }
}
