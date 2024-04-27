// const btCreate = (bt, idTxt, captionNode, parentNode) => {
//     bt.setAttribute("id", idTxt);
//     bt.appendChild(captionNode);
//     parentNode.append(bt);

document.addEventListener("DOMContentLoaded", () => {
    console.log("You've made it"); 


    const die= document.querySelector("#btDiv > img") ; 
    const bt1= document.querySelector("#bt1") ;
    // const userdie= document.querySelector("#userdie");
    

    bt1.addEventListener('click', () => {
        const n= Math.floor(Math.random() * 6) + 1 ; 
        die.setAttribute('src', `../03/img/${n}.png`)
        die.setAttribute('alt', `${n}`)

        if()
    })

})