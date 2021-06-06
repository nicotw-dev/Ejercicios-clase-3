let distancia = parseInt(prompt("Ingrese cantidad de kilometros a recorrer:"));
let velocidad = parseInt(prompt("Ingrese velocidad a la que dea ir en kilometros por hora (km/h):"));

distancia = (distancia * 1000); // Distancia en metros //
velocidad = (velocidad * (1000 / 3600)); // Velocidad en metros/segundos //

let tiempo = parseFloat((distancia / velocidad) / 60).toFixed(0);

alert("El tiempo estimado de llegada es de " + tiempo + " minutos.");