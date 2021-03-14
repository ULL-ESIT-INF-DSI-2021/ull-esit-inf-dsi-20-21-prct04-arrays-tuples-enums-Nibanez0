/**
 * Hallar sumar, resta, multiplicación de un número por un punto y la distacia entre 2 puntos bidimensionales
 */

export function SumaBidimensional(p1: number[], p2: number[]) {
    let resultado: number[] = [];
    for(let i = 0; i < p1.length; i++) {
        resultado[i] = p1[i] + p2[i];
    }
    console.log("${resultado}");
}

export function RestaBidimensional(p1: number[], p2: number[]) {
    let resultado: number[] = [];
    for(let i = 0; i < p1.length; i++) {
        resultado[i] = p2[i] - p1[i];
    }
    console.log("${resultado}");
}

export function ProductoBidimensional(p1: number[], num: number) {
    let resultado: number[] = [];
    for(let i = 0; i < p1.length; i++) {
        resultado[i] = p1[i] * num;
    }
    console.log("${resultado}");
}

export function DistanciaBidimensional(p1: number[], num: number) {
    let resultado: number = 0;
    let auxA: number = 0;
    let auxB: number = 0;
    let auxC: number = 0;

        auxA = p1[1] - p2[1];
        auxA = auxA * auxA;

        auxB = p1[2] - p2[2];
        auxB = auxB * auxB;

        auxC = auxA + auxB;

        resultado = Math.sqrt(auxC);

    console.log("${resultado}");
}



let p1: number[] = [2, 4];
let p2: number[] = [3, 6];