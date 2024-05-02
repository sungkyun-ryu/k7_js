document.addEventListener("DOMContentLoaded", ()=> {
    const input1 = document.querySelector("#input1");
    const input2 = document.querySelector("#input2");
    const bts = document.querySelectorAll(".buttons");
    
    bts[0].addEventListener('click', (e)=>{
        e.preventDefault();

        // let t1= input1.value.split(''); 
        let t1 = [...input1.value.replace(' ', '')];
        let t2 = [] ;

        for(let i=t1.length-1; i>=0; i--) {
            t2.push(t1[i]);

            // console.log(t1[i], t2)
        }

        t2= t2.join(""); 

        if(t1 == t2) {
            input2.value = "회문입니다."
        } else {
            input2.value = "회문이 아닙니다."
        }
        
        console.log(input1.value, t1, t2)
    })

    bts[1].addEventListener('click', (e) => {
        e.preventDefault(); 

        
    })
})