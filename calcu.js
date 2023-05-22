function calculator () {
    let box = document.getElementById("box");
    let text = document.getElementById("text");
    let name1 = document.getElementById("fname").value;
    let name2 = document.getElementById("sname").value;
    let score = Math.floor(Math.random() * 100) + 1;
    let gif = document.getElementById("image");

    if (name1.length<=2) {
        text.innerHTML = "Please insert minimum 3 letters of your name and your Lover's name to calculate your love score."
        box.style.display = "block";
        box.style.backgroundColor = "transparent";
        box.style.padding = "0px"
        text.style.color = "#EE204D";
    } else if (name2.length<=2) {
        text.innerHTML = "Please insert minimum 3 letters of your name and your Lover's name to calculate your love score."
        box.style.display = "block";
        box.style.backgroundColor = "transparent";
        box.style.padding = "0px"
        text.style.color = "#EE204D";
    } else {
        box.style.display = "none";
        gif.style.display = "block";

        setTimeout(resultScrore,3000)
        function resultScrore () {
        gif.style.display = "none";
        text.innerHTML = "Dear "+name1+", your love score with "+name2+" is: "+score+"%";
        box.style.display = "block";
        box.style.padding = "16px"
        box.style.backgroundColor = "#020617"
        text.style.color = "white";
        document.getElementById("fname").value = "";
        document.getElementById("sname").value = "";
        }
    }

}

