//Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
//Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i
//numeri che ha visto precedentemente, nell'ordine che preferisce.
 



const numberList =document.getElementById("number-list")
const numArray = []

function numeriRandom(min,max){
   return Math.floor(Math.random()* max)+ min
}
   
for(let i= 0;numArray.length < 5; i++){

    let numrR = numeriRandom (1 , 50)     
    

    console.log(`il tuo numero random è :${numrR}`);
    

    if(!(numArray.includes(numrR) ) ) {
        numArray.push(numrR)
    }

console.log(numArray);

}
let contatore = 3
const countdown = document.getElementById("countdown")
let scomparsaIstruzioni = document.getElementById('instructions')
let answersForm = document.getElementById("answers-form")


for(let i= 0; i< numArray.length; i++){
    numberList.innerHTML += `<li> ${ numArray[i] } </li>`
}
    const timer = setInterval(function(){
    countdown.innerHTML = contatore--


    if( contatore < 0 ) {
    clearInterval( timer )
    numberList.classList.add('hidden')
    scomparsaIstruzioni.classList.add('hidden')
    answersForm.classList.remove("d-none") 
}
    
},1000)

//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri
//da indovinare sono stati individuati.
const bottone = document.querySelector(".btn-primary")
const input = document.querySelectorAll(".form-control")
const numeriSceltiC = []
const mesaggio =document.getElementById("message")

console.log(input);

bottone.addEventListener('click', function(event){
    event.preventDefault()

    for( let i = 0; i < input.length; i++ ){
        
        if(numArray.includes( parseInt(input[i].value )) ){

            numeriSceltiC.push(input[i].value)

        }

        console.log(numeriSceltiC, input[i].value,numArray.includes(parseInt(input[i].value)));
        
    }

mesaggio.innerHTML =`complimenti hai indovinato${numeriSceltiC.length}, e sono ${numeriSceltiC.join("-")}`
})
    












    






