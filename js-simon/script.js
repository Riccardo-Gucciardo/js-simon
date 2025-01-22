//Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
//Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i
//numeri che ha visto precedentemente, nell'ordine che preferisce.
 
//let timer = setInterval(myfunction, 7500)
//const listNumber = document.getElementById("numbers-list")
let casualN1 = Math.floor(Math.random()* 50)+ 1 
let casualN2 = Math.floor(Math.random()* 50)+ 1 
let casualN3 = Math.floor(Math.random()* 50)+ 1 
let casualN4 = Math.floor(Math.random()* 50)+ 1 
let casualN5 = Math.floor(Math.random()* 50)+ 1 

document.getElementById("numbers-list1").innerHTML = casualN1
document.getElementById("numbers-list2").innerHTML = casualN2
document.getElementById("numbers-list3").innerHTML = casualN3
document.getElementById("numbers-list4").innerHTML = casualN4
document.getElementById("numbers-list5").innerHTML = casualN5

const numberList =document.getElementById("input-group")
const numArrey = []
let contatore = 3
const countdown = document.getElementById("countdown")


    let scomparsaNumeri = document.getElementById('scomparsa')
    let scomparsaIstruzioni = document.getElementById('instructions')
    let answersForm = document.getElementById("answers-form")
    
    const timer = setInterval(function(){
    countdown.innerHTML = contatore--


    if( contatore < 0 ) {
    clearInterval( timer )
    scomparsaNumeri.classList.add('hidden')
    scomparsaIstruzioni.classList.add('hidden')
    answersForm.classList.remove("d-none") 
}
    
},1000)

//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri
//da indovinare sono stati individuati.




    






