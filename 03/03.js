/*
    1. retrieve the images and buttons from DOM after it is produced 
    2. produce button click event  
    3. produce random numbers (1-6) ; Math.floor(Math.random() * 6) + 1
    4. assign the numbers to the dice images. 
*/ 

document.addEventListener("DOMContentLoaded", () => {
    console.log("You've made it"); 

    const dice= document.querySelector("#btDiv > img") ; 
    const bt= document.querySelector("#btDiv > button") ;

    bt.addEventListener('click', () => {
        const n= Math.floor(Math.random() * 6) + 1 ; 
        dice.setAttribute('src', `./img/${n}.png`)
        dice.setAttribute('alt', `${n}`)
    })

})