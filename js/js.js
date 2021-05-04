//CLASE 6


//creo objetos
const objeto1 = { id: 1, precio: 5400, nombre:" arroz"};
const objeto2 = { id: 2, precio: 1500, nombre:" pan"};
const objeto3 = { id: 3, precio: 990, nombre:" azucar"};
//creo el array con solo 2 objetos 
let carrito = [objeto1, objeto2];
//agrego el 3er objeto mediante push
carrito.push(objeto3);
//visualizo el carrito con FOR
for (let index = 0; index < carrito.length; index++) {
    const element = carrito[index];
    console.log(element)
    
}
//visualizo el carrito con FOR OF
for (const producto of carrito) {
    console.log(producto.id)
    console.log(producto.precio)
    console.log(producto.nombre)
}











//CLASE 5
/*
//ejemplo con IVA
class Producto {
    constructor(nombre, precio){
        this.nombre = nombre.toUpperCase(); // para que pase a MAYUSCULA
        this.precio = parseFloat(precio); // para calcular el IVA
        this.vendido = false; 
    }
    sumarIva(){
        this.precio = this.precio * 1.21;
    }
    vender(){
        this.vendido = true; // para activar la venta
    }
}

const producto1 = new Producto("arroz", "125")
const producto2 = new Producto("fideos", "250")
producto1.sumarIva();
producto2.sumarIva();
producto1.vender();
console.log (producto1)

*/
/*
//creo el constructor desde una CLASS
class Persona{
    constructor(nombre, edad, calle){
        this.nombre = nombre;
        this. edad = edad;
        this. calle = calle;
    }
    hablar(){
        console.log ( "hola soy " + this.nombre);
    }
}
const personaUNO = new Persona ("Julieta", 27, "alvarez 4511")
personaUNO.hablar() // activo la funcion
*/

//constructores
/*
function Persona(nombre, edad, calle) {
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
    this.hablar = function () {console.log ("hola soy " + this.nombre)}
    
}
const personaUNO = new Persona ("Julieta", 27, "alvarez 4511")
const personaDOS = new Persona ("Giselle", 31, "alvarez 4511 b")

console.log (personaUNO)
console.log (personaDOS.nombre)
console.log (personaDOS.edad)
console.log (personaDOS.calle)
personaUNO.hablar(); // para activar la funcion this.hablar dentro del constructor pero vinculado a un objeto en particular, personaUNO

for (const propiedad in personaUNO) { // para recorrer todas las propiedades del objeto
    console.log (personaUNO[propiedad]);
}
*/
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
