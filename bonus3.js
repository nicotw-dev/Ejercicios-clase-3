// Calculadora de sueldo neto: Obra social 3%, jubilacion 11%, ley 19032 3%. //

alert("Calculadora de sueldo neto");

let bruto = parseFloat(prompt("Ingrese su sueldo bruto en $"));

// Deducciones //

let social = (bruto * 3 / 100);
let jub = (bruto * 11 / 100);
let ley = (bruto * 3 / 100);


// Neto a pagar //

let neto = bruto - social - jub - ley;

alert("Ver resultados en consola");

console.log("- Sueldo bruto: $" + bruto);
console.log("Deducciones:");
console.log("- Obra social: $" + social);
console.log("- Jubilacion: $" + jub);
console.log("- Ley 19032: $" + ley);
console.log("- Neto a pagar: $" + neto);

