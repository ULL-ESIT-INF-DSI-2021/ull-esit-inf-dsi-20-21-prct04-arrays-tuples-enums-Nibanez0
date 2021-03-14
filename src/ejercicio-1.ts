/**
 * Decodificar valores de resistor
 */
export function decodeResistor(colores: string[]) {
    let color: string[] = [`Negro`, `Marron`, `Rojo`, `Naranja`, `Amarillo`, `Verde`, `Azul`, `Violeta`, `Gris`, `Blanco`];
    let valor: string[] = [];
    let contador: number = 0;

    colores.forEach((col) => {
        if(contador < 2) {
            valor = valor + color.indexOf(col).toString();
        }
        contador ++;
    });
    return parseInt(valor); //convierte cadena 'valor' en numero entero para devolver
}

let colore: string[] = ["Marrón", "Negro"];