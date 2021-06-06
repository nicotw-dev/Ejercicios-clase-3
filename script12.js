// Conversor de Celsius a Farenheit //

alert("Conversor de Celsius a Farentheit");

let nombre = prompt("Ingrese su nombre");
let censius = parseFloat(prompt("Ingrese una temperatura en grados celsius (ºC)"));
let farenheit = ((censius * (9/5)) + 32);

console.log("Hola " + nombre + ", " + censius + "ºC " + "equivalen a " + farenheit
+ "ºF");