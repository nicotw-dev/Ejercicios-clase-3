// Conversor de Farenheit a Celsius //

alert("Conversor de Farenheit a Celsius");

let nombre = prompt("Ingrese su nombre:");
let farentheit = parseFloat(prompt("Ingrese una temperatura en grados farenheit (ºF)"));
let celsius = ((farentheit - 32) * (5/9)).toFixed(1);

console.log("Hola " + nombre + ", " + farentheit + "ºF equivalen a " + celsius + "ºC");