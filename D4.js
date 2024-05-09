/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

console.log("ESERCIZIO 1");

function area(l1, l2) {
  if (typeof l1 === "number" && typeof l2 === "number") {
    const product = l1 * l2;
    return (
      "L'area del rettangolo la cui base misura " +
      l1 +
      "cm e la cui altezza misura " +
      l2 +
      "cm è: " +
      product +
      "cm"
    );
  } else {
    return "Devi inserire due numeri!";
  }
}

console.log(area(10, 5));
console.log(area(35, "72"));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

console.log("ESERCIZIO 2");

const crazySum = function (int1, int2) {
  if (
    typeof int1 === "number" &&
    typeof int2 === "number" &&
    Number.isInteger(int1) &&
    Number.isInteger(int2)
  ) {
    if (int1 === int2) {
      const intSum = int1 + int2;
      const intProduct = intSum * 3;
      return (
        "La somma del numero " +
        int1 +
        " e del numero " +
        int2 +
        " è unguale a " +
        intSum +
        " moltiplicato per 3 fa " +
        intProduct
      );
    }
    const intSum = int1 + int2;
    return (
      "La somma del numero " +
      int1 +
      " e del numero " +
      int2 +
      " è unguale a " +
      intSum
    );
  } else {
    return "Devi inserire dei numeri interi!";
  }
};

console.log(crazySum(1, 2));
console.log(crazySum(5, 5));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

console.log("ESERCIZIO 3");

const crazyDiff = function (number) {
  if (typeof number === "number") {
    if (number > 19) {
      const difference = number - 19;
      const product = difference * 3;
      return (
        "Il numero " +
        number +
        " è più grande di 19, dopo la differenza, moltiplicheremo per 3. La differenza è " +
        difference +
        " e la moltiplicazione è " +
        product
      );
    }
    const difference = number - 19;
    return "La differenza assoluta fra " + number + " e 19 è " + difference;
  } else {
    return "Devi inserire un numero!";
  }
};

console.log(crazyDiff(5));
console.log(crazyDiff(34));
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
