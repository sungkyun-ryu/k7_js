const btCreate = (bt, idTxt, captionNode, parentNode) => {
    bt.setAttribute("id", idTxt);
    bt.appendChild(captionNode);
    parentNode.append(bt);
}


document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM Complete");


    const btDiv = document.getElementById("btDiv");
    const bt1 = document.createElement("button");
    const bt1Text = document.createTextNode("Good");

    const bt2 = document.createElement("button");
    const bt2Text = document.createTextNode("Bad");

    const bt3 = document.createElement("button");
    const bt3Text = document.createTextNode("Reset")


    bt1.setAttribute("id", "bt11");
    bt1.appendChild(bt1Text);
    btDiv.append(bt1);

    bt2.setAttribute("id", "bt22");
    bt2.appendChild(bt2Text);
    btDiv.append(bt2);

    btCreate(bt3,"bt33", bt3Text, btDiv);


    bt1.addEventListener('click', () => {
        // if (document.querySelector("#msg").innerHTML == "")
            document.querySelector("#msg").innerHTML
                = "Feeling GOOD :)"

        // else
        //     document.querySelector("#msg").innerHTML
        //         = ""

    })

    bt2.addEventListener('click', () => {
        // if (document.querySelector("#msg").innerHTML == "")
            document.querySelector("#msg").innerHTML
                = "Feeling BAD :( "
        // else
        //     document.querySelector("#msg").innerHTML
        //         = ""
    })

    bt3.addEventListener('click', () => {
        document.querySelector("#msg").innerHTML = ""
    })

})
// bt1.addEventListener('click', () => {
//      document.querySelector("#msg").innerHTML = ""
// })




