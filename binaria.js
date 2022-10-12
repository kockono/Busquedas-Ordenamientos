/**
 * Usaremos un pivote para saber si esta mas a la "derecha" o a la izuiqerda, un requisito del ordenamiento binario es de
 * que el arreglo este ordenado, compara el valor a buscar si es igual termina si es menor ira a la "izquierda", si es
 * mayor ira a la "derecha".
 * 
 * Suma los 2 indices y divide entre 2 para saber a que posición se movera
 * 
 * @method {@link_binarySearch} - Busqueda binaria 
 * @var      arrayNumbers[] - Arreglo de numeros
 * @argument l        - Inicialmente apunta al indice 0
 * @argument r        - Apunta al indice final
 * @var      toSearch -  Numero a buscar
 * @const    pivote   - Apuntador que mueve la posición de apartir de que posición va buscar 
 */

let arrayNumbers = [55,44,11,24,5,22,445,6,1,3,57];


function binarySearch(array, l, r, toSearch) {
    if(l > r) return -1;
    
    // Suma las 2 posiciones y las divide entre 2 para saber a que posición movera el pivote, redondea la posición
    const pivote = Math.floor( (l + r) / 2);

    if(array[pivote] == toSearch) return pivote; // Si la posición es igual al dato que buscar retorna el pivote y termina la recursividad

    if(array[pivote] <  toSearch) {
        return binarySearch(array, pivote + 1, r, toSearch) // Mueve el pivote a la derecha
    } else {
        return binarySearch(array, l, pivote - 1, toSearch); // Mueve el pivote a la izquierda
    }

 }

 // Left 0, Right empieza en la ultima, numero a buscar => 57
 console.log( binarySearch(arrayNumbers, 0 , arrayNumbers.length - 1, 57));
 