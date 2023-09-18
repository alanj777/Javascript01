function calcularEdad(fechaNacimiento) {
    const hoy = new Date();
    const fechaNac = new Date(fechaNacimiento);
    const edad = hoy.getFullYear() - fechaNac.getFullYear();
    return edad;
}

const nombre = prompt("Por favor, ingresa tu nombre:");
const fechaNacimiento = prompt("Ingresa tu fecha de nacimiento (YYYY-MM-DD):");

const edad = calcularEdad(fechaNacimiento);
console.log(`Hola ${nombre}, tienes ${edad} años!`);

// Ejercicio 2: Tirando fruta
const frutas = ['manzana', 'pera', 'uva', 'banana', 'sandía', 'naranja', 'kiwi', 'cereza', 'fresa', 'mango'];

const frutaUsuario = prompt("Por favor, ingresa una fruta:");
if (frutas.includes(frutaUsuario)) {
    console.log(`Sí, tenemos ${frutaUsuario}!`);
} else {
    console.log(`No, no tenemos ${frutaUsuario}!`);
}

// Ejercicio 3: Comparando datos y tipos
// A.
console.log(10 == '10'); // true

// B.
console.log(10 === '10'); // false
// La diferencia entre == y === es que == realiza una comparación de valor, mientras que === realiza una comparación de valor y tipo de dato.

// C.
console.log(typeof 10.6); // number

// D.
console.log(true == 1); // true


const ciudad = {
    nombre: "Ciudad Ejemplo",
    fechaFundacion: "01-01-1900",
    poblacion: 1000000,
    extension: 1500
};

for (const key in ciudad) {
    if (ciudad.hasOwnProperty(key)) {
        console.log(`${key}: ${ciudad[key]}`);
    }
}

function duplicarElementos(array) {
    const resultado = [];
    for (let i = 0; i < array.length; i++) {
        resultado.push(array[i] * 2);
    }
    return resultado;
}

const numeros = [1, 2, 3, 4, 5];
const numerosDobles = duplicarElementos(numeros);
console.log(numerosDobles);

function imprimirTriangulo(base) {
    for (let i = 1; i <= base; i++) {
        let linea = '';
        for (let j = 1; j <= i; j++) {
            linea += '*';
        }
        console.log(linea);
    }
}

imprimirTriangulo(5); // Triángulo de 5 líneas
imprimirTriangulo(10); // Triángulo de 10 líneas

// Ejercicio 7: Nombres con 'A'
const nombresInput = prompt("Por favor, ingresa una lista de nombres separados por coma:");
const nombres = nombresInput.split(',');

const nombresConA = nombres.filter(nombre => nombre.trim().charAt(0).toLowerCase() === 'a');

const resultadoDiv7 = document.getElementById('resultado'); // Cambia el nombre de la variable
resultadoDiv7.innerHTML = `Nombres que comienzan con 'A': ${nombresConA.join(', ')}`;

// Ejercicio 8: Reemplazar Palabras
const texto = prompt("Por favor, ingresa una cadena de texto:");
const palabraOriginal = prompt("Ingresa la palabra que deseas reemplazar:");
const palabraReemplazo = prompt("Ingresa la palabra de reemplazo:");

const textoModificado = texto.replace(new RegExp(palabraOriginal, 'g'), palabraReemplazo);

const resultadoDiv8 = document.getElementById('resultado'); // Cambia el nombre de la variable
resultadoDiv8.textContent = `Texto modificado: ${textoModificado}`;

// Ejercicio 9: Cortar texto
 texto = prompt("Por favor, ingresa una cadena de texto:");
const numero = parseInt(prompt("Ingresa un número para cortar el texto:"));

const textoCortado = texto.slice(0, numero);

const resultadoDiv9 = document.getElementById('resultado'); // Cambia el nombre de la variable
resultadoDiv9.textContent = `Texto cortado: ${textoCortado}`;

// Ejercicio 10: String con separador
const elementosInput = prompt("Por favor, ingresa una lista de elementos separados por coma:");
const elementos = elementosInput.split(',');

const stringConSeparador = elementos.join(' - ');

const resultadoDiv10 = document.getElementById('resultado'); // Cambia el nombre de la variable
resultadoDiv10.textContent = `String con separador: ${stringConSeparador}`;

// Ejercicio 11: Calculadora de Recaudación
const pedidosInput = prompt("Por favor, ingresa una lista de objetos pedidos junto con sus respectivos totales, separados por coma (nombre:total):");
const pedidos = pedidosInput.split(',');

let recaudacionTotal = 0;
for (const pedido of pedidos) {
    const [nombre, total] = pedido.split(':');
    const monto = parseFloat(total);
    if (!isNaN(monto)) {
        recaudacionTotal += monto;
    }
}

const resultadoDiv11 = document.getElementById('resultado'); // Cambia el nombre de la variable
resultadoDiv11.textContent = `Recaudación total: $${recaudacionTotal.toFixed(2)}`;