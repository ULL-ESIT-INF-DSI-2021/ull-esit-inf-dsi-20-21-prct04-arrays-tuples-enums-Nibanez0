/**
 * Mover los ceros de un vector hacia el final
 */
export function moveZero(vector: number[]) {
    let resultado: number[];
    let contador: number = 0;
    for(let i = 0; i< vector.length; i++) {
        if(vector[i] == 0) {
            contador++;
        }else {
            resultado.push(vector[i]);
        }
    }

    while (contador != 0) {
        resultado.push(0);
        contador --;
    }
    return resultado;
}        
let vector: number[] = [1, 0, 1, 2, 0, 1, 3];