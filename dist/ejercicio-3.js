((item) => {
    if (typeof item === "number") {
        media = media + item;
        numeros++;
    }
    else {
        cadena = cadena + item;
    }
});
media = media / numeros;
return [media, cadena];
