//crea due array che hanno un numero di elementi diversi. aggiungi gli elementi casuali all'array che ha meno elementi fino a quando ne avrà tanti qunati l'altro

//crea due array di diversa lunghezza
const deskList = ['pc', 'agenda', 'ipad', 'borraccia', 'penne', 'candela', 'mouse', 'caricatori']
const roomList = ['divano', 'tv', 'play', 'scrivania']

//aggiungere elementi causali all'array più corta finche le due array non hanno la stessa lunghezza

let i=4;


while (roomList.length !== deskList.length){
    roomList.push(deskList[i])
    console.log(roomList);
    i++
}