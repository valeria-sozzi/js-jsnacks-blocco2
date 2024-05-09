//inserisci un numero, se è pari stampa il numero se è dispari stampa il numero successivo

//chiedere di inserire un numero
const numberUser = parseInt(prompt('inserisci un numero'))

//se il numero è pari stamparlo se il numero è disparo stampare il numero successivo

if (numberUser % 2 ===0){
    console.log(numberUser);
    document.querySelector('.result').innerHTML = `il numero ${numberUser} è pari!`
} else {

    let numberOdd = numberUser + 1
    console.log(numberOdd);
    document.querySelector('.result').innerHTML = `il numero che hai scelto è dispari, quindi il numero pari successivo è ${numberOdd}`
}

