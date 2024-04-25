/* 1. From DOM, load the nodes you want to control. 
      => 2 images, 6 buttons, result message board. 
   2. Listen to which button was pressed.  
   3. Produce the associated image to the button. => user's die.
   3-1. Produce random number and make connection to the related image. 
   3-2. Compare the numbers from computer and user. 
   3-3. Show the result on the message board. 
*/

 document.addEventListener("DOMContentLoaded", ()=>{
    const com_img = document.querySelector("#com_img");
    const user_img = document.querySelector("#user_img");
    const resultboard = document.querySelector("#resultboard");

    // console.log(resultboard);

    const bts = document.querySelectorAll("button");

    // console.log(bts);
    
    // //반복문 1
    // console.log("반복문1")
    // for(let i =0; i<bts.length; i++) {
    //     console.log(bts[i]); 
    // }

    // //반복문 2
    // console.log("반복문2")
    // for(let i in bts) {
    //     console.log(bts[i]); 
    // }

    // //반복문 3
    // console.log("반복문3")
    // bts.forEach(bt => {
    //     console.log(bt) 
    // })

    // //반복문 4
    // console.log("반복문4")
    // for(let [i,bt] of bts.entries()) {
    //     console.log(i, bt); 
    // }

    //Listen to which button was pressed.

    for(let bt of bts) {
        bt.addEventListener('click', ()=> {
            const user_num = parseInt(bt.textContent.slice(-1))
            const com_num = Math.floor(Math.random() * 6) + 1;
            
            com_img.setAttribute('src', `../03/img/${com_num}.png`)
            user_img.setAttribute('src', `../03/img/${user_num}.png`)

            if(com_num > user_num) {
                resultboard.textContent = "You Lose!";
            } else if(com_num == user_num) {
                resultboard.textContent = "Draw Game!";
            } else {
                resultboard.textContent = "You Win!"
            }
            
            // console.log(user_num);
            // console.log(com_num); 
        })
    }

   


    

 })