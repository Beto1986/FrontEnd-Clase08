/* 1 - a) Solicitar al usuario que ingrese 5 nombres de frutas y almacenarlos en un array.
b) Ahora, solicitar al usuario que ingrese otros nombres de frutas, la cantidad que desee, sin pedirle de antemano cuál será la cantidad a ingresar.
c) Concatenar ambos arrays y mostrarlo de dos formas diferentes: Con las 5 frutas al principio, y con las 5 frutas al final.
2 - Crear un array con 10 nombres de ciudades, y solicitar al usuario que nos diga un número. Mostrar el nombre de la ciudad en esa posición del array.
3 - Utilizar el mismo array de ciudades, solicitar al usuario un número y remover esa cantidad de ciudades del array. Mostrar dos opciones: Sacando los datos desde el principio , y desde el final del array.
4 - Crear un array de 8 posiciones con nombres de artistas musicales y mostrar:
Su longitud
El último elemento.
Solo las posiciones pares
todos los elementos
todos los elementos menos el último 
Todos los elementos menos el primero
todos los elementos separados por “*”.
Solicitar al usuario un nuevo artista para reemplazar al útimo ingresado.
5)  Crear un array de 8 posiciones con números enteros  y mostrar:
Su longitud
Solo las posiciones impares.
Solo los NUMEROS impares.
El mayor de ellos
Mostrar la mitad de elementos del array. (Pensar esto como si no supieramos la cantidad de posiciones que tiene.) */

// 1- a) Solicitar al usuario que ingrese 5 nombres de frutas y almacenarlos en un array.
let frutas = [];
let fruta = "";

for (let i = 0; i < 5; i++) {
    fruta = prompt("Ingrese la fruta");
    frutas.push(fruta);
}

console.log(frutas);

// b) Ahora, solicitar al usuario que ingrese otros nombres de frutas, la cantidad que desee, sin pedirle de antemano cuál será la cantidad a ingresar.
let frutas2 = [];
let fruta2 = "";

while (fruta2 !== "E" && fruta2 !== "e") {
    fruta2 = prompt("Ingrese más frutas. Escriba 'E' para finalizar");
    if (fruta2 !== "E" && fruta2 !== "e") {
        frutas2.push(fruta2); // acá asigno el valor de cada fruta ingresada por el usuario al array frutas2.
    }
}
console.log(frutas2);

// // c) Concatenar ambos arrays y mostrarlo de dos formas diferentes: Con las 5 frutas al principio, y con las 5 frutas al final.
// Declaro 2 nuevos arrays aparte para concatenar frutas y frutas 2.
frutasfinales = [];
frutasfinales2 = [];

// Concateno las frutas en ambos sentidos.
frutasfinales = frutas.concat(frutas2);
frutasfinales2 = frutas2.concat(frutas);

console.log(frutasfinales);
console.log(frutasfinales2);

// 2 - Crear un array con 10 nombres de ciudades, y solicitar al usuario que nos diga un número. Mostrar el nombre de la ciudad en esa posición del array.
let ciudades = ["Madrid", "Barcelona", "Londres", "Buenos Aires", "Moscú", "Amsterdam", "Rio de Janeiro", "París", "Nueva York", "Lima"];
let numerociudad;

numerociudad = parseInt(prompt("Ingrese el número de la ciudad que desea buscar. (Del 1 a 10)"));
console.log(ciudades[numerociudad]);

// 3 - Utilizar el mismo array de ciudades, solicitar al usuario un número y remover esa cantidad de ciudades del array. Mostrar dos opciones: Sacando los datos desde el principio , y desde el final del array.
let ciudades = ["Madrid", "Barcelona", "Londres", "Buenos Aires", "Moscú", "Amsterdam", "Rio de Janeiro", "París", "Nueva York", "Lima"];
alert("El array completo contiene las siguienes ciudades: " + ciudades);

//Opción 1
let numero = parseInt(prompt("Ingrese un número del 1 al 10"));
let eliminar = ciudades.splice(0, numero); // elimino hasta la posicion ingresada por el usuario
alert("La/s ciudades eliminadas son: " + eliminar);
alert("Las ciudades que restan son: " + ciudades);

// Opción 2.
let ciudades = ["Madrid", "Barcelona", "Londres", "Buenos Aires", "Moscú", "Amsterdam", "Rio de Janeiro", "París", "Nueva York", "Lima"];
alert("El array completo contiene las siguienes ciudades: " + ciudades);
let numero = parseInt(prompt("Ingrese un número del 1 al 10"));
let eliminar = "";

for (let i = 0; i < numero; i++) {
    eliminar = eliminar + ciudades.pop() + ","; // elimina la ultima posición
}

alert("Se eliminaron la/s siguientes ciudades: " + eliminar);
alert("Las ciudades restantes son: " + ciudades);

/* 4 - Crear un array de 8 posiciones con nombres de artistas musicales y mostrar:
Su longitud
El último elemento.
Solo las posiciones pares
todos los elementos
todos los elementos menos el último 
Todos los elementos menos el primero
todos los elementos separados por “*”.
Solicitar al usuario un nuevo artista para reemplazar al útimo ingresado.
*/

// Crear un array de 8 posiciones con nombres de artistas musicales y mostrar: 
// Su longitud.
let artistas = ["Gustavo Cerati", "Patricio Rey", "Charly García", "Fito Paez", "Leon Gieco", "Ozzy Osbourne", "Luca Prodan", "Ricardo Iorio"];
alert("La longitud del array es: " + artistas.length);

// El último elemento.
let artistas = ["Gustavo Cerati", "Patricio Rey", "Charly García", "Fito Paez", "Leon Gieco", "Ozzy Osbourne", "Luca Prodan", "Ricardo Iorio"];
let ultimoelemento = 0;
ultimoelemento = artistas.length - 1; // busco el último elemento 
alert("El último elemento del array es: " + artistas[ultimoelemento]);

// Solo las posiciones pares
let artistas = ["Gustavo Cerati", "Patricio Rey", "Charly García", "Fito Paez", "Leon Gieco", "Ozzy Osbourne", "Luca Prodan", "Ricardo Iorio"];
let guardoartistapar = "";

for (let i = 0; i < artistas.length; i++) { // Recorro todas las posiciones del array

    if (i % 2 === 0) {
        guardoartistapar = guardoartistapar + artistas[i] + ", "; // me guardo cada artísta con índice par
    }
}

alert("Los artístas pares del array son: " + guardoartistapar);

// Todos los elementos
let artistas = ["Gustavo Cerati", "Patricio Rey", "Charly García", "Fito Paez", "Leon Gieco", "Ozzy Osbourne", "Luca Prodan", "Ricardo Iorio"];
let guardoartistas = "";

for (let i = 0; i < artistas.length; i++) { // Recorro todas las posiciones del array

    if (i < 7) {
        guardoartistas = guardoartistas + artistas[i] + ", "; // me guardo cada artísta 
    } else {
        guardoartistas = guardoartistas + artistas[i]; // saco la coma del final al último artista ingresado
    }

}

alert("Todos los artístas del array son: " + guardoartistas);

// Todos los elementos menos el último
let artistas = ["Gustavo Cerati", "Patricio Rey", "Charly García", "Fito Paez", "Leon Gieco", "Ozzy Osbourne", "Luca Prodan", "Ricardo Iorio"];
artistas.pop(); // elimina la última posición
alert("Todos los artístas con excepeción del último son: " + artistas);

// Todos los elementos menos el primero
let artistas = ["Gustavo Cerati", "Patricio Rey", "Charly García", "Fito Paez", "Leon Gieco", "Ozzy Osbourne", "Luca Prodan", "Ricardo Iorio"];
artistas.shift(); // elimina la primer posición
alert("Todos los artístas con excepeción del primero son: " + artistas);

// Todos los elementos separados por “*”.
let artistas = ["Gustavo Cerati", "Patricio Rey", "Charly García", "Fito Paez", "Leon Gieco", "Ozzy Osbourne", "Luca Prodan", "Ricardo Iorio"];
let cadena = "";

for (let i = 0; i < artistas.length; i++) { // Recorro todas las posiciones del array

    cadena = cadena + artistas[i] + "*"; // separo por * cada elemento
}

alert(cadena);

// Solicitar al usuario un nuevo artista para reemplazar al último ingresado.
let artistas = ["Gustavo Cerati", "Patricio Rey", "Charly García", "Fito Paez", "Leon Gieco", "Ozzy Osbourne", "Luca Prodan", "Ricardo Iorio"];
let artistaeliminado = "";

artistaeliminado = artistas.pop(); // eliminamos el último artista
artistaagregado = prompt("Ingrese el nuevo artísta:"); // Solicito el artista a agregar
artistas.push(artistaagregado); // agrego el artista del usuario

alert("El nuevo artista " + artistaagregado + " va a reemplazar al artista " + artistaeliminado + " que estaba en la última posición, por lo que el array quedaría conformado de la siguiente manera: " + artistas);

/* 5)  Crear un array de 8 posiciones con números enteros  y mostrar:
Su longitud
Solo las posiciones impares.
Solo los NUMEROS impares.
El mayor de ellos
Mostrar la mitad de elementos del array. (Pensar esto como si no supieramos la cantidad de posiciones que tiene.) */

// Su longitud
let numeros = [10, 20, 30, 40, 50, 60, 70, 80];
numeros = numeros.length; // longitud del array.
alert("La longitud del array es de: " + numeros);

// Solo las posiciones impares.
let numeros = [10, 20, 30, 40, 50, 60, 70, 80];
let guardarposicionimpar = "";

for (let i = 0; i < numeros.length; i++) { // Recorro todas las posiciones del array

    if (i % 2 !== 0) { // Si es una posicion impar, la guardo y acumulo
        guardarposicionimpar = guardarposicionimpar + numeros[i] + ", "; // me guardo cada posicion impar del array
    }
}

alert("Las posiciones impares del array son: " + guardarposicionimpar);

// Solo los NUMEROS impares.
let numeros = [11, 13, 15, 17, 50, 20, 9, 32];
let guardarnumeroimpar = "";

for (let i = 0; i < numeros.length; i++) { // Recorro todas las posiciones del array

    if (numeros[i] % 2 !== 0) { // Si es un numero impar, la guardo y acumulo
        guardarnumeroimpar = guardarnumeroimpar + numeros[i] + ", "; // me guardo cada numero impar del array
    }
}

alert("Los números impares del array son: " + guardarnumeroimpar);

// El mayor de ellos
let numeros = [11, 13, 15, 17, 50, 20, 9, 32];
let guardarnumeromayor = 0;
let guardarnumeroactual = 0;

for (let i = 0; i < numeros.length; i++) { // Recorro todas las posiciones del array

    if (i === 0) {
        guardarnumeromayor = numeros[i]; // Guardo el primer número de la posición 0. Hasta acá es el mayor.
    } else {
        guardarnumeroactual = numeros[i]; // Guardo el número actual que estoy recorriendo
        if (guardarnumeroactual > guardarnumeromayor) { // Si el nro actual es > al mayor obtenido
            guardarnumeromayor = guardarnumeroactual; // Asigno el nuevo mayor
        }
    }
}

alert("El número mayor del array es: " + guardarnumeromayor);

// Mostrar la mitad de elementos del array. (Pensar esto como si no supieramos la cantidad de posiciones que tiene.) 
let numeros = [11, 13, 15, 17, 50, 20, 9, 32];
let numerosmitad = 0;
let muestromitad = "";

numerosmitad = (numeros.length / 2); // Divido el array por la mitad 

for (let i = 0; i < numerosmitad; i++) { // Recorro todas las posiciones del array

    muestromitad = muestromitad + numeros[i] + ","; // Asigno cada número de la mitad

}

alert("Los números de la primer mitad del array son: " + muestromitad);