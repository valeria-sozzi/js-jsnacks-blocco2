//crea un array di numeri interi e fai la somma di tutti li elementi che sono in posizione dispari

//creo un array con numeri interi 
const numbers = [1,2,3,4,5,6,7,8,9,10]

//sommare tutti gli elementi che sono in poizioni dispari
let somma = 0;

let i=0

while (i<numbers.length){
    if (numbers[i] % 2 !== 0) {
        somma += numbers[i]
    }

    i++
}
console.log(somma);