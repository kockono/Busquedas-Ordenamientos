/**
 * Este código ordena del mayor a menor a traves de la comparativa de 2 numeros, si es menor cambia la posicion del 
 * numero anterior 9,3 pasaría a 3,9
 * @method {@link_bubbleSort} - Ordenamiento con la comparación de 2 posiciones
 * @param  {array}            - array de numeros
 */


let arrayNumbers = [55,44,11,24,5,22,445,6,1,3,57];

function bubbleSort(array) {
    // array.length -1, ya que toma 2 valores [1, 2] para que no tome 1 valor mas del limite.
    for(let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            // Compara la primera posicion con la siguiente
            comparePositions(array, j)
            // comparePositionsForm2(array, j)
        }
    }
    return array;
 }
 
 function comparePositions(array, j) {
    if( array[j] > array[j+1]) {
        // Guardamos temporalmente el numero que remplazara el menor al mayor, par así mas adelante moverlo en la posicion
        // que se encontraba el menor
        let auxiliar = array[j];
        //Aquí movemos el primer elemento 55, 44 pasaría a ser 44,44 [0,1]
        array[j] = array[j+1];
        // Ahora recuperamos el 55 con auxiliar moviendolo a la posicion de donde estaba el 44
        array[j+1] = auxiliar;
    }
 }

 function comparePositionsForm2(array , j) {
    if( array[j] > array[j+1]) {
        [array[j], array[j+1]] = [array[j+1], array[j]]
    }
 }

 console.log( bubbleSort(arrayNumbers) );
 