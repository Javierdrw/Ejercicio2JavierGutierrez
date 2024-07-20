// 1. Realizar un programa que permita el ingreso de un numero y muestre su tabla de
// multiplicar (Los primeros 10 multiplos).

let numero = 5

for(i = 1; i <= 10; i++){
    console.log(numero * i);
}

// 2. Realizar un programa que permita el ingreso de numeros los cuales se tienen que ir
// acumulando. El ingreso de datos terminara cuando el usuario ingrese un valor 0.

let numerosIngresados = []
for (i = 0; i <10; i++){
    
    let numeroIngresado = parseInt(prompt('ingrese un numero'))
    numerosIngresados.push(numeroIngresado)
    
    if (numeroIngresado == 0) {
        break
    }console.log(numerosIngresados);
}

// 3. Realizar en juego de adivinar el numero del los ejercicios del tema anterior, en una
// variable guardar un numero que este en el rango 1 - 100. La persona debera poder
// ingresar numeros hasta adivinar el valor que se encuentre en dicha variable. Si el
// valor es menor al numero secreto, avisarle al usuario lo sucedido y pedirle
// nuevamente el ingreso de otro numero, realizar la misma accion pero en lugar de
// cuando es menor, si es que el numero ingresado es mayor. Asi sucesivamente hasta
// que el usuario adivine el numero secreto. Por ultimo mostrar un mensaje de
// felicitaciones y decirle en cuantos intentos lo ha realizado.

let numeroAdivinanza = 78

let numeroIntentos = 0

for(numeroIntentos;;){
    let numeroIngresado= parseInt(prompt('Ingrese un numero del 1 al 100'))
    if(numeroIngresado===numeroAdivinanza){
        alert(`Felicidades Has Adivinado el numero "${numeroAdivinanza}" y lo has hecho en "${numeroIntentos}" Intentos` )
        break
    }else if(numeroIngresado>numeroAdivinanza){
        alert('Numero ingresado es mayor')
    }else{
        alert('Numero ingresado es menor')
    }numeroIntentos++
}

// 4. Realizar un programa que permita decir si un numero es primo. Un numero es primo
// si solo es divisible por el valor 1 y por si mismo. Ayuda: Usar la operacion de modulo.
// Los numeros solo poseen divisores hasta la mitad del valor del mismo. Ej: 50 tiene
// como divisores 1, 2, 5, 10 y 25. No es primo. Con tener mas de 2 divisores el
// numero ya no es primo.

for (i = 0; i < 10; i++){
    let numeroPrimo = parseInt(prompt('ingrese un numero primo'))
    if(numeroPrimo%2 == 0){
        alert('numero Ingresado es Primo')
    }else{
        alert('Numero Ingresado No es Primo')
    }
}


// 5. Realizar un programa que permita dado un numero, mostrar todos sus divisores.

let numero = 50

let divisores = []

for (let i = 1; i<=numero; i++){
    let divisor= Number.isInteger(numero/i);
    if(divisor){
        divisores.push(i)
    } 
}

console.log(`Los numeros divisores por ${numero} son: ${divisores}`);

// 6. Dado un array de 10 elementos, realizar un programa que recorra ese array y
// muestre un mensaje por consola con cada uno de los elementos del array.

let estudiantes = ['juan','sebastian','pedro','yari','maira','roxana','rocio','liliana','esteban','manuel']

for (const nombre of estudiantes) {
    console.log(`Hola ${nombre} Biemvenid@`);
    
}

// 7. Dado un array de 10 numeros, realizar un programa que muestre por consola el
// doble de cada uno de los elementos.

let numeros = [2, 20, 50, 40, 90, 80, 55, 63, 45, 78]

for (const numero of numeros) {
    console.log(numero*2);
}

// 8. Dado un array con al menos 5 objetos comprendidos por un grupo familiar, cada
// objeto representa a 1 persona con al menos 4 propiedades, realizar un programa
// que muestre un mensaje de presentacion por cada elemento del array.

let familiar = [
    {
        nombre: "julio",
        edad: 25,
        parentesco: "primo",
        estado: "Casado",
        telefono: 3201236478,
        sexo: 'hombre'
    },
    {
        nombre: "ale",
        edad: 20,
        parentesco: "hermano",
        estado: "soltero",
        telefono: 3201121456,
        sexo: 'hombre'
    },
    {
        nombre: "ana",
        edad: 18,
        parentesco: "hermana",
        estado: "Casada",
        telefono: 3201222513,
        sexo: 'mujer'
    },
    {
        nombre: "diana",
        edad: 55,
        parentesco: "tia",
        estado: "Casada",
        telefono: 3201125513,
        sexo: 'mujer'
    },
    {
        nombre: "yari",
        edad: 30,
        parentesco: "esposa",
        estado: "Casada",
        telefono: 3202156424,
        sexo: 'mujer'
    }
]     

for (let persona of familiar){

    let sexo = 'el'
    if(persona.sexo=='mujer'){
        sexo = 'la'
    }
    console.log(`Hola mi nombre es ${persona.nombre} tengo ${persona.edad}años soy ${sexo} ${persona.parentesco} de Javier, mi numero de telefono es ${persona.telefono} y estoy ${persona.estado}`);

    console.log('');
}

// 9. Dado un array de 10 numeros, realizar un programa que recorra el array y solo
// muestre los numeros impares.

let numero =[25,40,35,80,95,76,47,91,79,85,35,65,45,96,3,5,4,6,15,2,4,52,5,46,3,5,8,7,9,6,23,5,85,56,5,96]

for(let impar of numero){
    if(impar%2==1){
        console.log(`los numeros impares son ${impar}`);
    }
}

// 10. Realizar un programa que permita la entrada de numeros y calcule la suma de los
// numeros pares por un lado y los impares por otro, el ingreso de dato finaliza cuando
// el usuario ingresa un 0.


let numerosimpares = 0
let numerospares = 0

for(let i = 0; i < 100; i++){
    let numeroIngresado = parseInt(prompt('ingresa un numero'))
    if (numeroIngresado===0) {
        break
        
    } else if(numeroIngresado%2==0){
        numerospares= numerospares+numeroIngresado
    }else{
        numerosimpares= numerosimpares+numeroIngresado
    }

}
console.log(`esta es la sumatoria de los numeros pares ${numerospares}`);
console.log(`esta es la sumatoria de los numeros impares ${numerosimpares}`);

// 11. Dado un array de 10 numeros, realizar un programa que imprima por pantalla el
// numero mas grande.

let numeros = [1,25,45,90,75,8,56,86,988,674,58,5,44,6,56]
let numeroMayor = 0

for (let numero of numeros) {
    if(numero>numeroMayor){
        numeroMayor = numero
    }
}

console.log(`el numero Mayor es ${numeroMayor}`);

// 12. Dado un array de 10 numeros, realizar un programa que imprima por pantalla el
// numero mas chico.

let numeros = [85,95,46,126,6,122,3,145,63,1,2,3,3,26,41,6,1]
let numeroMenor = 10000

for (let numero of numeros) {
    if(numero<numeroMenor){
        numeroMenor = numero
    }
}
console.log(`el numero Menos es ${numeroMenor}`);

// 13. Realizar un programa que permita jugar a piedra papel o tijeras, se debera poder
// ingresar los nombres de 2 jugadores. En el bucle del juego se debera pedir 1 a 1 las
// manos de cada jugador, y en cada turno se debera seguir jugando solo si se produjo
// un empate. Caso contrario mostrar un mensaje con el nombre de la persona
// ganadora.

alert('Hola Bienvenidos al juego de Piedra Papel o Tijera empecemos con el juego ')

let jugador1 = prompt('Eres el jugador 1 Ingresa tu nombre')
let jugador2 = prompt('Eres el jugador 2 Ingresa tu nombre')

let activo = true


while(activo == true){
    let cartaJug1 = prompt(`jugador ${jugador1} ingresa una carta 1(piedra), 2(Papel) o 3(Tijera) el valor ingresado debe ser un numero`)
    let cartaJug2 = prompt(`jugador ${jugador2} ingresa una carta 1(piedra), 2(Papel) o 3(Tijera) el valor ingresado debe ser un numero`)

    if (cartaJug1===cartaJug2) {
        alert('Han Empatado siguiente juego')
        
    } else if (cartaJug1=='1'&& cartaJug2== '2'){
        alert(`El Jugador ${jugador2} ha GANADO`)
        activo = false
    } else if (cartaJug1=='1'&& cartaJug2== '3'){
        alert(`El Jugador ${jugador1} ha GANADO`)
        activo = false
        
    } else if (cartaJug1=='2'&& cartaJug2== '1'){
        alert(`El Jugador ${jugador1} ha GANADO`)
        activo = false
        
    } else if (cartaJug1=='2'&& cartaJug2== '3'){
        alert(`El Jugador ${jugador2} ha GANADO`)
        activo = false
        
    } else if (cartaJug1=='3'&& cartaJug2== '1'){
        alert(`El Jugador ${jugador2} ha GANADO`)
        activo = false
        
    } else if (cartaJug1=='3'&& cartaJug2== '2'){
        alert("`El Jugador ${jugador1} ha GANADO`")
        activo = false
        
    }else{
        alert('Has ingresado un valor incorrecto')
    }
}

// 14. Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado.

let triangulo = ''
let asteriscos = '*'
for (let i = 1; i <= 5; i++){
    let triangulo = asteriscos.repeat(i) 
    console.log(triangulo);
}

// 15. Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado
// pero invertido.

let triangulo = ''
let asteriscos = '*'
for (let i = 5; i >= 1; i--){
    let triangulo = asteriscos.repeat(i) 
    console.log(triangulo);
}

// 16. Dado un array de 10 numeros desordenados, realizar un programa que imprima por
// pantalla el array ordenado. (NO USAR SORT, solo ciclos FOR)


function ordenarArray(arr) {
  let n = arr.length;
  let stop;

  do {
      stop = false;
      for (let i = 0; i < n - 1; i++) {
          if (arr[i] > arr[i + 1]) {
              let temp = arr[i];
              arr[i] = arr[i + 1];
              arr[i + 1] = temp;

              stop = true;
          }
      }
      n--;
  } while (stop);

  return arr;
}

let array = [64, 34, 25, 12, 22, 11, 20,35,45];
console.log("Array original: " + array);
console.log("Array ordenado: " + ordenarArray(array));
