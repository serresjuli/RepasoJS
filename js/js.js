//CLASE 5
//constructores
function Persona(nombre, edad, calle) {
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
    
}
const personaUNO = new Persona ("Julieta", 27, "alvarez 4511")
const personaDOS = new Persona ("Giselle", 31, "alvarez 4511 b")

console.log (personaUNO)

//crear objetos sueltos
/*
let nombre = "homero"
let edad = 39
let calle = "av siempreviva"
const persona1 = { nombre: "homero",
                edad: 39,
                calle: "av siempreviva",
        }
//para cambiar el nombre        
persona1["nombre"] = "marge"; 

console.log(persona1.nombre)
console.log(persona1.edad)
*/

//CLASE 4
/*
//declaro funcion
function solicitarNombre() {
    let nombreIngresado = prompt ("Ingresar nombre");
    alert ("el nombre ingresado es " + nombreIngresado);
    
}
// activo la funcion
solicitarNombre()
// con parametros
function conParametros (parametro1, parametro2) {  
        console.log ( parametro1 + " " + parametro2)
}
conParametros ()
*/


//CLASE 3
/* ingresarNumero = parseInt(prompt("ingrese numero"))
 // contar ccon FOR
for (let i = 1 ; i<= 10; i++) {
    let resultado = ingresarNumero * i ;
    console.log( ingresarNumero + "X" + i + "=" + resultado)
}
//SWITCH es como el IF
let entrada = prompt("Ingresa tu nombre")
while (entrada != "ESC"){
    switch (entrada){
        case "ANA":
            console.log("Hola ana")
        break;
        case "JULI":
            console.log("Hola juli")
        break;
        default:
            console.log("who are youuu")
        break;
    }
    entrada = prompt("Ingresa nuevamente tu nombre")

}*/


// CLASE 2
/*let Precio = prompt("ingrese precio")


if (Precio < 20){
    console.log("es menor a 20")
}
else if(Precio < 50){
    console.log("es menor a 50")
}
else{
    console.log( "es mayor a 50")
}*/
