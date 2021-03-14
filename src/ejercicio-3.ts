/**
 * Hallar la media y concatenar los valores de un array
 */
export function meanAndConcatenate(array: (number | string[]): [number, string] {
    let numeros: number = 0;
    let media: number = 0;
    let cadena: string = "";

    array.forEach((valor) => {
        if(typeof valor === "number") {
            media = media+valor;
        numeros++;       
    } else {
        cadena = cadena+valor;
    }
    });

    media = media/numeros;

    return [media, cadena];
}