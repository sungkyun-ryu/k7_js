/*
단위환산
*/

///함수로 만들기
// const show = (s1, s2, l1, l2) => { 
//     if(s2.value == 'CC') s1.value = 'FF'; 


// } 
// else {
//     s1.value = 'CC'; 
 
// }
// }


document.addEventListener('DOMContentLoaded', ()=> {
    const sel1=document.querySelector("#sel1");
    const sel2=document.querySelector("#sel2");

    const input1= document.querySelector("#input1");
    const input2= document.querySelector("#input2");

    const label1= document.querySelector("#label1"); 
    const label2= document.querySelector("#label2");

    /// labels are not working... find the problem. 

    sel1.addEventListener('change', ()=> {
        console.log(sel1.value, sel2.value);
        if(sel1.value == 'CC') {
            sel2.value = 'FF'; 
            label1.textContent = '℃';
            label2.textContent = '℉';

        } 
        else {
            sel2.value = 'CC'; 
            label1.textContent = '℉';
            label2.textContent = '℃'; 
        }
    })

    sel2.addEventListener('change', ()=> {
        console.log(sel1.value, sel2.value);
        if(sel2.value == 'CC') {
            sel1.value = 'FF'; 
            label2.textContent = 'C';
            label1.innerHTML = 'F';

        } 
        else {
            sel1.value = 'CC'; 
            label2.textContent = 'F';
            label1.innerHTML = 'C'; 
        }
    })


    
})
