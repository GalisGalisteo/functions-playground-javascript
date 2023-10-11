/**
 * DIFÍCIL 
 *
 * Nos han pedido diseñar una función que, dado un string, nos diga si dicho string está todo en mayúsculas. Si lo está, debe devolver un valor boleano de true. En caso contrario, debe devolver un valor boleano de false.
 *
 * Modifica únicamente la función para conseguirlo.
 */
function isUpperCase(word) {
  let wordUpperCase = word.toUpperCase();
  if (word === wordUpperCase) {
    return true;
  } else {
      return false;
  }
}

/**
 * NO MODIFICAR A PARTIR DE AQUÍ. SOLO PUDES MODIFICAR EL CONTENIDO DE LA FUNCIÓN {}
 */

console.log(isUpperCase("patata")); // debe devolver false
console.log(isUpperCase("patAtA")); // debe devolver false
console.log(isUpperCase("PATATA")); // debe devolver true
console.log(isUpperCase("Hello World!")); // debe devolver false
