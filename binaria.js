/**
 * Usaremos un pivote para saber si esta mas a la "derecha" o a la izuiqerda, un requisito del ordenamiento binario es de
 * que el arreglo este ordenado, compara el valor a buscar si es igual termina si es menor ira a la "izquierda", si es
 * mayor ira a la "derecha".
 * 
 * Suma los 2 indices y divide entre 2 para saber a que posición se movera
 * 
 * @method {@link_binarySearch} - Busqueda binaria 
 * @var   arrayNumbers[] - Arreglo de numeros
 * @var   left   - Inicialmente apunta al indice 0
 * @var   right  - Apunta al indice final
 * @const pivote - Apuntador que mueve la posición de apartir de que posición va buscar 
 */

let arrayNumbers = [55,44,11,24,5,22,445,6,1,3,57];
let right;
let left;

 function binarySearch(array, l, r, x) {
    if(l > r) return -1;
    
    // Suma las 2 posiciones y las divide entre 2 para saber a que posición movera el pivote, redondea la posición
    const pivote = Math.floor( (l + r) / 2);

    if(array == x) return pivote;

    if(array < x) {
        return binarySearch(array, pivote + 1) // Mueve el pivote a la derecha
    } else {
        return binarySearch(array, l, pivote -1, x); // Mueve el pivote a la izquierda
    }

 }