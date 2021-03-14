/**
 * Hallar sumar, resta, multiplicación de un número por un punto y la distacia entre 2 puntos tridimensionales
 */

export function SumaTridimensional(p1: number[], p2: number[]) {
    let resultado: number[] = [];
    for(let i = 0; i < p1.length; i++) {
        resultado[i] = p1[i] + p2[i];
    }
    console.log("${resultado}");
}

function RestaTridimensional(p1: number[], p2: number[]) {
    let resultado: number[] = [];
    for(let i = 0; i < p1.length; i++) {
        resultado[i] = p2[i] - p1[i];
    }
    console.log("${resultado}");
}

function ProductoTridimensional(p1: number[], num: number) {
    let resultado: number[] = [];
    for(let i = 0; i < p1.length; i++) {
        resultado[i] = p1[i] * num;
    }
    console.log("${resultado}");
}

function DistanciaTridimensional(p1: number[], num: number) {
    let resultado: number = 0;
    let auxA: number = 0;
    let auxB: number = 0;
    let auxC: number = 0;
    let auxD: number = 0;

        auxA = p1[1] - p2[1];
        auxA = auxA * auxA;

        auxB = p1[2] - p2[2];
        auxB = auxB * auxB;

        auxD = p1[3] - p2[3];
        auxD = auxD * auxD;

        auxC = auxA + auxB + auxD;

        resultado = Math.sqrt(auxC);

    console.log("${resultado}");
}



let p1: number[] = [2, 4, 1];
let p2: number[] = [3, 6, 5];