

function cuantoCuesta(pulgadas, memoria) /*<elipsis-for-student@*/ {
  if (typeof(pulgadas) !== 'number') {
    throw new Error("el primer argumento de cuantoCuesta debe ser un número")
  }
  if (typeof(memoria) !== 'number') {
    throw new Error("el segundo argumento de cuantoCuesta debe ser un número")
  }
  
  return 6000 * pulgadas + 20000 * memoria + 100000
} /*@elipsis-for-student>*/
// Nos dice cuanto cuesta una computadora en base a sus pulgadas y su cantidad de memoria
//
// Por ejemplo:
//
//  ム cuantoCuesta(25, 16)
//  5700