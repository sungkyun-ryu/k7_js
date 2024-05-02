document.addEventListener('DOMContentLoaded', ()=> {
    const bt91 =document.querySelector("#bt91");
    const res = document.querySelector(".chosennum");

    bt91.addEventListener('click', (e)=>{
        e.preventDefault();
        let arr= []; 
        
        while(arr.length < 7) {
            let n = Math.floor(Math.random() * 45) + 1; 
            if(!arr.includes(n)) arr.push(n);
        } 

        console.log(arr)

        let tags = arr.map(item =>
                         `<span class="sp${Math.floor(item/10)}">${item}</span>`
        );
        
        console.log(tags)

        tags.splice(6,0, '<p> + </p>'); 

        tags = tags.join('');

        numbers.innerHTML = tags;
        
    })
})