/**
 * Extiende la función del ex4.
 *
 * Ahora, también vamos a determinar el agua necesaria en función de la condición física del ciclista.
 *
 * Si la condición es 'buena', el ciclista necesita 0.5l por cada km
 * Si la condicion es 'regular', el ciclista necesita 0.6l por cada km
 * Si la condición es 'mala', el ciclista necesita 0.7l por cada km
 */

/** La función está incompleta. SOLO debes modificar la función */

function aguaNecesaria(condicion, km) {
  let aguaPorKm;
  let litrosTotales;

  if (condicion === "buena") {
    aguaPorKm = 0.5;
  } else if (condicion === "regular") {
    aguaPorKm = 0.6;
  } else if (condicion === "mala") {
    aguaPorKm = 0.7;
  } else {
    throw new Error("La condición no existe");
  }
  litrosTotales = aguaPorKm * km
  return litrosTotales;
}

let condicion = "regular";
let km = 5;
let agua = aguaNecesaria(condicion, km);
console.log(
  `Para recorrer ${km} kms con una condición física ${condicion}, el ciclista necesita ${agua}l de agua`
);

/**
 * Resultado esperado: https://oscarm.tinytake.com/msc/ODc4ODA0NF8yMjIwOTMyMA
 */
