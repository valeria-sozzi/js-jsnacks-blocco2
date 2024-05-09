// generatore di "nomi cognomi" casuali: prendendo una lista di nomi e una lista di cognomi, bisogna generare una falsa lista di 3 invitati

//creare la lista nomi e la lista cognomi 
let nameList = ['valeria','roberto','agnese'];
let secondNameList = [' sozzi',' latini',' burla'];

// document.querySelector('.guest').innerHTML = `Gli invitati alla festa sono ${nameList[1]} ${secondNameList[1]}, ${nameList[2]} ${secondNameList[2]}, ${nameList[0]} ${secondNameList[0]}`
let fullName= ''

for (let i = 0 ; i < 3; i++){
    fullName += `${nameList[i]} ${secondNameList[i] } `;
    document.querySelector('.guest').innerHTML = `Gli invitati alla festa sono ${fullName}`

}