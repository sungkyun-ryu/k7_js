
document.addEventListener("DOMContentLoaded", () => {
    const input1 = document.querySelector("#input1");
    const input2 = document.querySelector("#input2");
    const bts = document.querySelectorAll("button");


    bts[0].addEventListener('click', (e)=>{
        e.preventDefault();
        // let t1= input1.value.split(''); 
        let t1 = [...input1.value.replaceAll(" ", '')];
        let t2 = [] ;

        console.log(t1); 

        for(let i=t1.length-1; i>=0; i--) {
            t2.push(t1[i]);
        }
       
        t1= t1.join("") ; t2= t2.join("");  

        if(t1 == t2) {
            input2.value = "회문입니다."
        } else {
            input2.value = "회문이 아닙니다."
        }
    })

    bts[1].addEventListener('click', (e) => {
        e.preventDefault();

        let sum =0;

        for(let c of input1.value) {
            if(isNaN(c) == false) {
                sum += parseInt(c); 
            } 
        }
        input2.value = sum; 
    })
})