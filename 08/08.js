document.addEventListener('DOMContentLoaded', () => {

    const input1 = document.querySelector("#input1");
    const bts81 = document.querySelectorAll(".b1");
    const bts82 = document.querySelectorAll('.b2');
    const bts83 = document.querySelectorAll('.b3');

    let arr = [];
    let obj = {
        'Pizza': '🍕',
        "Hamburger": '🍔',
        "Hotdog": '🌭',
        "Chips": '🍿'
    };

    for (let bt of bts81) {

        console.log(bt);
        bt.addEventListener('click', (e) => {
            e.preventDefault();
            console.log(bt.innerHTML);

            // input1.value= bt.innerHTML; 
            // if(bt.innerHTML == 'Pizza') arr.push('🍕');
            // else if(bt.innerHTML == "Hamburger") arr.push('🍔');
            // else if(bt.innerHTML == "Hotdog") arr.push('🌭');
            // else if(bt.innerHTML == "Chips") arr.push('🍿');

            // input1.value = arr.join('💚')

            arr.push(obj[bt.innerHTML])
            input1.value = arr.join('💚')
        })

    }

    for (let bt of bts82) {
        bt.addEventListener('click', (e) => {
            e.preventDefault();

            arr = arr.filter(item => item != obj[bt.innerHTML.replace(' delete', '')])
            input1.value = arr.join('💚')
        });

    }

    for (let bt of bts83) {
        bt.addEventListener('click', (e) => {
            e.preventDefault();
            let tm = bt.innerHTML.split('▶');
            console.log(tm)

            arr= arr.map(item => item == obj[tm[0]] 
                            ? obj[tm[1]] : item);

            input1.value = arr.join('💚');
                
    })
}
})