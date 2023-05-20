
//let ques = prompt("Hi, What's your name ?");
//ques = ques.toUpperCase();
//alert("You are Welcome " + ques);
//document.getElementById("name").innerHTML=(ques);


function togg() {
    document.getElementById("sideb").classList.toggle("show")
}

//calculator

function calculator() {
    let box = document.getElementById("box");
    let text = document.getElementById("text");
    let name1 = document.getElementById("nameOne").value;
    let name2 = document.getElementById("nameTwo").value;
    let score = Math.floor(Math.random() * 100) + 1;

    if (name1.length<=2) {
        text.innerHTML = "Please insert minimum 3 letters of your name and your Lover's name to calculate your love score."
        box.style.display = "block";
        box.style.backgroundColor = "red";
    } else if (name2.length<=2) {
        text.innerHTML = "Please insert minimum 3 letters of your name and your Lover's name to calculate your love score."
        box.style.display = "block";
        box.style.backgroundColor = "red";
    } else {
        text.innerHTML = "Dear " + name1 + ", Your love score with your partner " + name2 + " is " + score + "%";
        box.style.backgroundColor = "green";
        box.style.display = "block";
        document.getElementById("nameTwo").value = "";
        document.getElementById("nameOne").value = "";
    }

}