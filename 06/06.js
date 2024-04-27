/*
단위환산
*/

///함수로 만들기
// const show = (s1, s2, l1, l2) => { 
//     if(s1.value == 'CC') {
//         s2.value = 'FF'; 
//         l1.textContent = '℃';
//         l2.textContent = '℉';
//         input2.value= (input1.value  * 9/5 + 32).toFixed(2);
//     }
//     else {
//         s2.value = "CC" ;
//         l1.textContent = '℉';
//         l2.textContent = '℃';
//         input2.value=((input1.value - 32) * 5/9).toFixed(2);
//     }
// }



document.addEventListener('DOMContentLoaded', () => {
    const sel1 = document.querySelector("#sel1");
    const sel2 = document.querySelector("#sel2");

    const input1 = document.querySelector("#input1");
    const input2 = document.querySelector("#input2");

    const label1 = document.querySelector("#label1");
    const label2 = document.querySelector("#label2");

//TEMPERATURE INPUTS

    sel1.addEventListener('change', () => {
        console.log(sel1.value, sel2.value);
        if (sel1.value == 'CC') {
            sel2.value = 'FF';
            label1.textContent = '℃';
            label2.textContent = '℉';

            input2.value = (input1.value * 9 / 5 + 32).toFixed(2);

        }
        else {
            sel2.value = 'CC';
            label1.textContent = '℉';
            label2.textContent = '℃';

            input2.value = ((input1.value - 32) * 5 / 9).toFixed(2);

        }
        // show(sel1.value, sel2.value, label1, label2);

    })

    sel2.addEventListener('change', () => {
        console.log(sel1.value, sel2.value);
        if (sel2.value == 'CC') {
            sel1.value = 'FF';
            label2.textContent = 'C';
            label1.innerHTML = 'F';

            input2.value = ((input1.value - 32) * 5 / 9).toFixed(2);

        }
        else {
            sel1.value = 'CC';
            label2.textContent = 'F';
            label1.innerHTML = 'C';

            input2.value = (input1.value * 9 / 5 + 32).toFixed(2);
        }
    })

    input1.addEventListener('input', () => {
        if(sel1.value == 'CC') 
            input2.value= (input1.value  * 9/5 + 32).toFixed(2);
        else 
            input2.value=((input1.value - 32) * 5/9).toFixed(2);
        })

// DISTANCE INPUTS

    sel3.addEventListener('change', () => {
        console.log(sel1.value, sel2.value);
        if (sel3.value == 'mi') {
            sel4.value = 'me';
            label3.textContent = 'mi.';
            label4.textContent = 'km';

            input4.value = (input3.value * 1.609344).toFixed(4);

        }
        else {
            sel4.value = 'mi';
            label3.textContent = 'km';
            label4.textContent = 'mi.';

            input4.value = ((input3.value / 1.609344)).toFixed(4);

        }
        // show(sel1.value, sel2.value, label1, label2);

    })

    sel4.addEventListener('change', () => {
        console.log(sel3.value, sel4.value);
        if (sel4.value == 'mi') {
            sel3.value = 'me';
            label4.textContent = 'mi.';
            label3.innerHTML = 'km';

            input4.value = ((input3.value * 1.609344)).toFixed(4);

        }
        else {
            sel3.value = 'mi';
            label4.textContent = 'km';
            label3.innerHTML = 'mi.';

            input4.value = (input3.value / 1.609344).toFixed(4);
        }
    })

    input3.addEventListener('input', () => {
        if(sel3.value == 'mi') 
            input4.value = ((input3.value * 1.609344)).toFixed(4);
        else 
            input4.value = (input3.value / 1.609344).toFixed(4);
    })




})
