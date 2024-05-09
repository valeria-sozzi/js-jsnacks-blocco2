//il software deve chiedere per 5 volte all'utente di inserire un numero. il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni con il for e con il while.

let somma=0

for (let i=0; i < 5; i++){
    let numberUser = parseInt(prompt('inserisci un numero'))
    somma += numberUser
}
console.log(somma);

let sommaWhile = 0;

let index=0

while (index<5) {
    let numberUtente = parseInt(prompt('inserisci un numero'))
    sommaWhile += numberUtente

    index++
}
console.log(sommaWhile);