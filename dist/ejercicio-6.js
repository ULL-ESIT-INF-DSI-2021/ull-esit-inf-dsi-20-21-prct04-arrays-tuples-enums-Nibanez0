function SumaBidimensional(p1, p2) {
    let resultado = [];
    for (let i = 0; i < p1.length; i++) {
        resultado[i] = p1[i] + p2[i];
    }
    console.log("${resultado}");
}
function RestaBidimensional(p1, p2) {
    let resultado = [];
    for (let i = 0; i < p1.length; i++) {
        resultado[i] = p2[i] - p1[i];
    }
    console.log("${resultado}");
}
function ProductoBidimensional(p1, num) {
    let resultado = [];
    for (let i = 0; i < p1.length; i++) {
        resultado[i] = p1[i] * num;
    }
    console.log("${resultado}");
}
function DistanciaBidimensional(p1, num) {
    let resultado = 0;
    let auxA = 0;
    let auxB = 0;
    let auxC = 0;
    auxA = p1[1] - p2[1];
    auxA = auxA * auxA;
    auxB = p1[2] - p2[2];
    auxB = auxB * auxB;
    auxC = auxA + auxB;
    resultado = Math.sqrt(auxC);
    console.log("${resultado}");
}
let p1 = [2, 4];
let p2 = [3, 6];
