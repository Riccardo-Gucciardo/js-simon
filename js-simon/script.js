//Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
//Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i
//numeri che ha visto precedentemente, nell'ordine che preferisce.
 
//let timer = setInterval(myfunction, 7500)
//const listNumber = document.getElementById("numbers-list")
let casualN1 = Math.floor(Math.random()* 100)+ 1 
let casualN2 = Math.floor(Math.random()* 100)+ 1 
let casualN3 = Math.floor(Math.random()* 100)+ 1 
let casualN4 = Math.floor(Math.random()* 100)+ 1 
let casualN5 = Math.floor(Math.random()* 100)+ 1 

document.getElementById("numbers-list1").innerHTML = casualN1
document.getElementById("numbers-list2").innerHTML = casualN2
document.getElementById("numbers-list3").innerHTML = casualN3
document.getElementById("numbers-list4").innerHTML = casualN4
document.getElementById("numbers-list5").innerHTML = casualN5

setTimeout(myfunction,2000);

function myfunction() {
    let scomparsaNumeri = document.getElementById('scomparsa')
    let scomparsaIstruzioni = document.getElementById('instructions')

    scomparsaNumeri.classList.add('hidden')
    scomparsaIstruzioni.classList.add('hidden')
}




    






