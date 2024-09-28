//kata1
//filtra una lista de nombres y devuelve solo aquellos que tienen exactamente 4 letras

function friendNames(names) {
    return names.filter(name => name.length === 4);
  }
  
  
  console.log(friendNames(["Alfonso", "Lola", "Antonia", "Juan"])); 
  console.log(friendNames(["Lore", "Renata", "Mia"]));         
  

//kata2

//Dada una cadena, capitaliza las letras que ocupan índices pares e impares por separado, y devuelve el resultado como se muestra a continuación. El índice 0 se considerará par.

//Por ejemplo, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']

//El código retorna un arreglo con ambas versiones de la cadena: una con las letras en los índices pares capitalizadas y otra con las letras en los índices impares capitalizadas.
function capitalize(str) {
    // Capitalizar letras en índices pares
    let evenIndexCap = str
      .split('')
      .map((char, index) => (index % 2 === 0 ? char.toUpperCase() : char))
      .join('');
  
    // Capitalizar letras en índices impares
    let oddIndexCap = str
      .split('')
      .map((char, index) => (index % 2 !== 0 ? char.toUpperCase() : char))
      .join('');
  
    return [evenIndexCap, oddIndexCap];
  }
  
  // Ejemplos de uso
  console.log(capitalize("abcdef")); // Output: ['AbCdEf', 'aBcDeF']
  console.log(capitalize("javascript")); // Output: ['JaVaScRiPt', 'jAvAsCrIpT']


  //kata3


  function calculate(str){
    const lista = str.split(" ");
    let operador = "";
    let numeros = [];
     
    
    lista.map(elem => {
      !isNaN(elem) ? numeros.push(Number(elem)): null;
      elem === 'lose' ? operador = elem:
      elem === 'gains'? operador = elem : null;
    })
    
    return operador === 'gains' ?  numeros[0] + numeros[1] :  numeros[0] - numeros[1] ;
  
  }
  
  calculate ("Panda has 48 apples and loses 4")//, 44);
  calculate ("Jerry has 34 apples and gains 6")// ,40);

//kata_4
// devuelve una lista de cadenas:  en el orden inverso de la cadena original
//El bucle for va desde el final de la cadena original (str.length) y va cortando sucesivamente hasta que queda solo un carácter.
function reverseSlice(str) {
    let result = [];
    for (let i = str.length; i > 0; i--) {
      result.push(str.slice(0, i).split('').reverse().join(''));// Añadir a la lista de forma invertida
    }
    return result;
  }
  
  // Ejemplos 
  console.log(reverseSlice("123"));   // Output: ['321', '21', '1']
  console.log(reverseSlice("abcde")); // Output: ['edcba', 'dcba', 'cba', 'ba', 'a']
  
//kata_5
//Dada una matriz de palabras, devuelve un arreglo con el número de letras que ocupan sus posiciones en el alfabeto para cada palabra. Por ejemplo,

//resolver(["abode", "ABc", "xyzD"]) = [4, 3, 1]

function resolver(palabras) {
    // Función para contar las letras en posición alfabética
    const contarLetrasEnPosicion = (palabra) => {
      let contador = 0;
      
      for (let i = 0; i < palabra.length; i++) {
        // Obtener la posición en el alfabeto (1-26)
        const posicionAlfabeto = palabra[i].toLowerCase().charCodeAt(0) - 96;
        // Verificar si la posición coincide con la posición del índice + 1
        if (posicionAlfabeto === i + 1) {
          contador++;
        }
      }
      
      return contador;
    };
  
    // Aplicar la función a cada palabra en el arreglo
    return palabras.map(contarLetrasEnPosicion);
  }
  
  // Ejemplos de uso
  console.log(resolver(["abode", "ABc", "xyzD"])); // Output: [4, 3, 1]
  console.log(resolver(["hello", "world", "test"])); // Output: [1, 0, 0]
  



  //kata_6
//

  function masCercanoAZero(numeros) {
    const numerosUnicos = new Set(numeros);
     // Crear un conjunto para eliminar duplicados
  
    // Verificar si hay tanto el positivo como el negativo del mismo número (excepto 0)
    for (let num of numerosUnicos) {
      if (num !== 0 && numerosUnicos.has(-num)) {
        return null; // Devuelve null si hay números opuestos
      }
    }
  
    // Encontrar el número más cercano a cero
    let cercano = null;
    for (let num of numerosUnicos) {
      if (cercano === null || Math.abs(num) < Math.abs(cercano) || (Math.abs(num) === Math.abs(cercano) && num > cercano)) {
        cercano = num;
      }
    }
  
    return cercano; // Retorna el número más cercano a cero
  }
  
  // Ejemplos 
  console.log(masCercanoAZero([2, 4, -1, -3]));  // Output: -1
  console.log(masCercanoAZero([5, 2, -2]));      // Output: null
  console.log(masCercanoAZero([5, 2, 2]));       // Output: 2
  console.log(masCercanoAZero([13, 0, -6]));     // Output: 0
  
//kata_7
//función que convierta un número entero dado como cadena en letras mayúsculas ASCII o espacios.

function convertirAASCII(cadena) {
    let resultado = '';
    for (let i = 0; i < cadena.length; i += 2) {
      const par = cadena.slice(i, i + 2);//toma los 2 primeros caracteres
      const numero = parseInt(par, 10);//convierte par a un número entero
      resultado += String.fromCharCode(numero);//convierte el número -> carácter ASCII
    }
    return resultado; 
  }
 
  console.log(convertirAASCII('658776')); // Output: 'AWL'
  console.log(convertirAASCII('73327673756932858080698267658369')); // Output: 'I LIKE UPPERCASE'
  
  
  // //kata_7
  // otra version 
  function convertirAASCII(cadena) {
    const pares = cadena.match(/.{1,2}/g);  // Dividir la cadena en pares de dígitos  (expresión regular para agrupar en pares)
    const resultado = pares.map(par => String.fromCharCode(parseInt(par, 10))).join('');//convierte a ASCII
  
    return resultado; 
  }
  
  // Ejemplo 
  console.log(convertirAASCII('658776')); // Output: 'AWL'
  console.log(convertirAASCII('73327673756932858080698267658369')); // Output: 'I LIKE UPPERCASE'
  

//kata_8
//Crea una función que verifique si el primer argumento n es divisible por todos los otros argumentos (devuelve true si no hay otros argumentos).



//(6,1,3) --> true porque 6 es divisible por 1 y 3.
//(12,2) --> true porque 12 es divisible por 2.
function esDivisiblePorTodos(n, ...args) {
    return args.every(arg => n % arg === 0);
  }
  
  // Ejemplos 
  console.log(esDivisiblePorTodos(6, 1, 3));            // Output: true
  console.log(esDivisiblePorTodos(12, 2));              // Output: true
  console.log(esDivisiblePorTodos(100, 5, 4, 10, 25, 20)); // Output: true
  console.log(esDivisiblePorTodos(12, 7));              // Output: false
  
  //kata_9
  //Escribe una función sort_cards() que ordene una lista de cartas mezcladas, de manera que cualquier lista dada de cartas esté ordenada por rango, sin importar la colección inicial.

//Todas las cartas en la lista están representadas como cadenas de texto, por lo que la lista ordenada de cartas se ve así:

//['A', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K']
  function sort_cards(cartas) {
    // Definir el orden de las cartas
    const orden = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K'];
  
    // Ordenar las cartas según el índice en el array 'orden'
    return cartas.sort((a, b) => orden.indexOf(a) - orden.indexOf(b));
  }
  
  // Ejemplo de uso
  console.log(sort_cards(['3', '9', 'A', '5', 'T', '8', '2', '4', 'Q', '7', 'J', '6', 'K']));
  // Output: ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K']
  



  //kata_10
//En  una lista (lst) de grados de escalada y tendrás que escribir una función (ordenar_grados) que devuelva una lista de los grados ordenados
// de más fácil a más difícil.

// la entrada es una lista vacía, devuelve una lista vacía; de lo contrario, la entrada siempre será una lista válida con uno o más grados.  
  function ordenarGrados(grados) {
    // Función para determinar el orden de los grados
    const rangoGrados = {
      'VB': 0,
      'V0': 1,
      'V0+': 2,
      'V1': 3,
      'V2': 4,
      'V3': 5,
      'V4': 6,
      'V5': 7,
      'V6': 8,
      'V7': 9,
      'V8': 10,
      'V9': 11,
      'V10': 12,
      'V11': 13,
      'V12': 14,
      'V13': 15,
      'V14': 16,
      'V15': 17,
      'V16': 18,
      'V17': 19,
    };
  
    // Ordenar los grados usando la función de comparación
    return grados.sort((a, b) => rangoGrados[a] - rangoGrados[b]);
  }
  
  // Ejemplos de uso
  console.log(ordenarGrados(['V2', 'V0', 'V1', 'V3', 'VB'])); // Output: ['VB', 'V0', 'V1', 'V2', 'V3']
  console.log(ordenarGrados(['V5', 'V4', 'V6'])); // Output: ['V4', 'V5', 'V6']
  console.log(ordenarGrados([])); // Output: []
  




//kata_11
//Dejas caer una pelota desde una altura dada. Después de cada rebote, la pelota regresa a una proporción fija de su altura anterior.
// Si la pelota rebota a una altura de 1 o menos, consideramos que ha dejado de rebotar. Devuelve el número de rebotes que tarda la pelota
// en dejar de moverse.
//
function bouncingBall(alturaInicial, proporcionRebote) {
    let rebotes = 0;
    let alturaActual = alturaInicial;
  
    // Mientras la altura actual sea mayor que 1, sigue contando los rebotes
    while (alturaActual > 1) {
      alturaActual *= proporcionRebote; // Calcula la nueva altura después de cada rebote
      rebotes++;
    }
  
    return rebotes;
  }
  
  // Ejemplos 
  console.log(bouncingBall(4, 0.5));  // Output: 2
  console.log(bouncingBall(30, 0.3)); // Output: 3
  
//kata_12

//Escribir una función, esLetra (o es_letra o EsLetra), que nos indique si un carácter dado es una letra o no.
function esLetra(caracter) {
    return /^[a-zA-Z]$/.test(caracter);
  }
  // Ejemplos 
  console.log(esLetra('A')); // true
  console.log(esLetra('z')); // true
  console.log(esLetra('1')); // false
  console.log(esLetra('*')); // false
  

  