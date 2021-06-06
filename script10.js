// Calculo de precio final con descuento //

alert("Calculo de precio final con descuento:");

let monto = parseFloat(prompt("Ingrese un valor en $:"));
let descuento = parseFloat(prompt("Ingrese porcentaje a descontar:"));

alert("El precio final es de " + (monto - (descuento * monto / 100)) + " $");

