### Informe práctica 4: Arrays, tuplas y enumerados

```
Noelia Ibáñez Silvestre
Práctica 4- Desarrollo de Sistemas Informáticos
Universidad de La Laguna
```

## Objetivo
El objetivo de esta práctica es resolver una serie de ejercicios para conocer arrays, tuplas y enumerados.

## Pasos previos
1. Aceptar la asignacion de GitHub Classroom asociada a esta práctica.
2. Creación del proyecto.
3. Configurar la documentación con Typedoc y Mocha

## Creación y configuración del proyecto
Para crear y configurar el proyecto partimos de la [guía](https://ull-esit-inf-dsi-2021.github.io/typescript-theory/typescript-project-setup.html) proporcionada por el profesor y ajustando las siguientes configuraciones:

**package.json**
```
{
  "name": "practica3",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

**tsconfig.json**
```
"target": "ES2020",
"module": "commonjs", 
"declaration": true,  
"outDir": "./dist",
 "rootDir": "./src", 
```

## Configurar la documentación con Typedoc y Mocha
### Typedoc
Para llevar a cabo la configuración seguimos los pasos del [video](https://drive.google.com/file/d/19LLLCuWg7u0TjjKz9q8ZhOXgbrKtPUme/view).

Se puede resumir en:
1. Crear un fichero `typedoc.json` (`touch typedoc.json` en la terminal).
2. Agregar al fichero: 
```
{
    "entryPoints": [
        "./src/ejercicio-1.ts",
        "./src/ejercicio-2.ts"
    ],
    "out": "./docs"
}
```
3. Añadir en `package.json`, en scripts: 
```
"doc": "typedoc"
```
4. Para ejecutar: `npm run doc`

### Mocha
Para llevar a cabo la configuración seguimos los pasos del [video](https://drive.google.com/file/d/1-z1oNOZP70WBDyhaaUijjHvFtqd6eAmJ/view).

## Ejercicios
### Ejercicio 1 - Decodificar resistencias
Enunciado:
Si desea realizar algún proyecto usando una Raspberry Pi, probablemente necesitará usar resistencias. Para este ejercicio necesita conocer dos cosas sobre las resistencias:

    Cada resistor o resistencia tiene un valor de resistencia en Ohmios asociado. Además, las resistencias son tan pequeñas que si se les imprimiera el valor en ellas, sería muy difícil de leer. Para resolver este problema, los fabricantes siguen un estándar de bandas codificadas de colores para indicar sus valores de resistencia. Cada banda tiene una posición y un valor numérico.

    Las primeras dos bandas de una resistencia tienen un esquema de codificación muy simple: cada color se mapea a un único número. Por ejemplo, si una resistencia tiene impresa una banda marrón (valor 1) seguida de una banda verde (valor 5), el valor de la resistencia se traduciría al número 15.

El objetivo de este ejercicio es crear un programa que nos ayude a calcular el valor de una resistencia sin tener que memorizar los valores de las bandas. Para ello, cree una función decodeResistor que recibe como parámetros los nombres de los colores de una resistencia como entrada y devuelve un número de dos dígitos indicando el valor de la resistencia. La función deberá devover un número de dos dígitos incluso si recibe más de dos colores como parámetros.

Las bandas de colores están codificadas de la siguiente manera:

    Negro: 0
    Marrón: 1
    Rojo: 2
    Naranja: 3
    Amarillo: 4
    Verde: 5
    Azul: 6
    Violeta: 7
    Gris: 8
    Blanco: 9


Resolución:
```typescript
function decodeResistor(colores: string[]) {
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
```

Creamos la función `decodeResistor` que recibe un string con los colores. Dentro de la función creamos una cadena con los posibles colores (ordenados según valor), inicializamos una cadena que contendrá la solución y un contador que se asegurará de no sobrepasar las 2 resistencias.

A continuación, utilizamos forEach() para hallar el valor y si contador es más pequeño que 2, guardamos en la cadena valor el índice que tiene el color en el array (coincide con el valor de la resistencia).

Una vez termina, convertimos la cadena en un entero con parseInt() y lo devolvemos.

### Ejercicio 3 - Calcular la media y concatenar cadenas
Enunciado:
Escriba una función meanAndConcatenate que reciba como parámetro un array que incluye caracteres de texto y números. La función deberá devolver como resultado un array con dos valores:

    La media de los valores numéricos.
    Una cadena resultado de la concatenación de caracteres del array recibido.

Resolución: 
```typescript
function meanAndConcatenate(array: (number | string[]): [number, string] {
    let numeros: number = 0;
    let media: number = 0;
    let cadena: string[] = [];

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
```

Creamos una función llamada `meanAndConcatenate` que recibirá una cadena con números y letras. Además, esta función devolverá en un array la media y una cadena.

Dentro de la función, inicializamos una variable llamada números (servirá de contador para la media), una variable llamada media (contendrá el sumatorio y posteriormente, la media) y una cadena para las letras.

Una vez hemos inicializado todo, recorremos la cadena que le pasamos a la función con forEach() y comparamos si ese valor es un número o una letra. Si se trata de un número, vamos sumando y acumulando en `media` e incrementando el contador `numeros`. En cambio, si se trata de una letra, guardamos dicha letra en la cadena. Una vez terminamos de analizar todos los valores, calculamos la media (media/numeros) y devolvemos la media y la cadena.

### Ejercicio 4 - Mover los ceros al final
Enunciado:
Dado un array de números, escriba una función moveZeros que reciba como parámetro dicho array y mueva todos los ceros presentes en el array al final del mismo. El array debe mantener el mismo orden respecto al resto de elementos.

Resolución:
```typescript
function moveZero(vector: number[]) {
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
```

Creamos una función `moveZero` que recibirá un vector con números enteros y devolverá, también, un vector del mismo tipo. 
Inicializamos una vector de números, llamado `resultado` y un contador.

Empezamos a recorrer el vector y comparamos, si el valor que se encuentra en la posición `i` es un 0 incrementamos el contador, en caso contrario, añadimos con `push()` el valor al nuevo vector `resultado`.

Una vez hemos comparado y añadidos los valores distintos de 0, empezamos a decrementar el contador a la vez que añadimos los 0 al final con `push()`.

Finalmente, devolvemos dicho vector.

### Ejercicio 6 - Puntos bi-dimensionales
Enunciado:
Un punto describe una posición determinada respecto a un sistema de coordenadas preestablecido. Suponiendo un sistema de dos coordenadas (x, y), un punto en el espacio se denotaría de la forma Point(X, Y). A partir de la siguiente definición, cree un tipo de dato capaz de definir un punto bidimensional.

Además, defina las funciones necesarias para:

    Sumar y restar dos puntos coordenada a coordenada.
    Calcular el producto de un punto por un número.
    Calcular la distancia euclídea entre dos puntos.


Resolución:
```typescript
function SumaBidimensional(p1: number[], p2: number[]) {
    let resultado: number[] = [];
    for(let i = 0; i < p1.length; i++) {
        resultado[i] = p1[i] + p2[i];
    }
    console.log("${resultado}");
}

function RestaBidimensional(p1: number[], p2: number[]) {
    let resultado: number[] = [];
    for(let i = 0; i < p1.length; i++) {
        resultado[i] = p2[i] - p1[i];
    }
    console.log("${resultado}");
}

function ProductoBidimensional(p1: number[], num: number) {
    let resultado: number[] = [];
    for(let i = 0; i < p1.length; i++) {
        resultado[i] = p1[i] * num;
    }
    console.log("${resultado}");
}

 function DistanciaBidimensional(p1: number[], num: number) {
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
```
Definimos 2 puntos (p1, p2) que serán los que le pasemos a las respectivas funciones. Para la suma y la resta, recorremos el punto 1 (ambos tienen misma dimensión) y sumamos o restamos los valores de la posición "i". Para el producto, recorremos el vector y lo multiplicamos por el número que le pasamos con la función. Finalmente, para la distacia entre 2 puntos, inicializamos resultado (contendrá el resultado), auxA (contendrá el cuadrado de la resta entre las posiciones 1 de ambos puntos), auxB (contendrá el cuadrado de la resta entre las posiciones 2 de ambos puntos) y auxC (sumará auxA y auxB), una vez se calculan los auxiliares, resultado guardará la raiz cuadrada de auxC.

### Ejercicio 7 - Puntos n-dimensionales
Enunciado:
A partir del desarrollo realizado para el ejericio anterior, cree un tipo de datos que sea capaz de definir puntos de 3 o más dimensiones. Esto es, un punto debe tener, como mínimo, tres dimensiones y, como máximo, las que el usuario desee. Además, desarrolle las mismas funciones que en el ejercicio anterior, de modo que puedan operar sobre puntos n-dimensionales. Tenga en cuenta que no se pueden operar los puntos definidos en diferentes sistemas de coordenadas. Es decir, no podemos sumar un punto de tres dimensiones y un punto de cinco dimensiones.

Resolución:
```typescript
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
```

Definimos 2 puntos (p1, p2) de dimensión 3 que serán los que le pasemos a las respectivas funciones. Para la suma y la resta, recorremos el punto 1 (ambos tienen misma dimensión) y sumamos o restamos los valores de la posición "i". Para el producto, recorremos el vector y lo multiplicamos por el número que le pasamos con la función. Finalmente, para la distacia entre 2 puntos, inicializamos: resultado (contendrá el resultado), auxA (contendrá el cuadrado de la resta entre las posiciones 1 de ambos puntos), auxB (contendrá el cuadrado de la resta entre las posiciones 2 de ambos puntos), auxD (contendrá el cuadrado de la resta entre las posiciones 3 de ambos puntos) y auxC (sumará auxA, auxB y auxD), una vez se calculan los auxiliares, resultado guardará la raiz cuadrada de auxC.

## Conclusión
Para el desarrollo de esta práctica me he encontrado varias dificultades, sobretodo en configuración de ficheros y fallos con la propia configuración de VSCode. Aunque, si miramos el contenido y la práctica en sí me parece entretenida.

## Bibliografia
| Nombre                 | Link                                                                                          |
|------------------------|:---------------------------------------------------------------------------------------------:|
| Guía de configuración  | https://ull-esit-inf-dsi-2021.github.io/typescript-theory/typescript-project-setup.html       |
| W3School               | https://www.w3schools.com/js/                                                                 |
| MDN Web Docs           | https://developer.mozilla.org/es/docs/Web/JavaScript/                                         |
| Apuntes                | https://ull-esit-inf-dsi-2021.github.io/typescript-theory/typescript-arrays-tuples-enums.html | 
