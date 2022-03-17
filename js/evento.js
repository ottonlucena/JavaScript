


const $eventoAprendiendo = document.getElementById("eventoAprende");

$eventoAprendiendo.addEventListener("click", (e)=> {
    console.log("Hola, si funciona!"); //para verlo en consola
    console.log(e.target); // para que veamos de donde proviene el click
});