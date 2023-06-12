let num = Math.floor((Math.random()*6)+1);
var img1 = "./images"+"/dice"+num+".png";
var img3 = document.querySelectorAll("img")[0];
img3.setAttribute("src",img1);
let num1 = Math.floor((Math.random()*6)+1);
var img2 = "./images"+"/dice"+num1+".png";
var img4 = document.querySelectorAll("img")[1];
img4.setAttribute("src",img2);

if(num > num1){
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins"
    let name = prompt("please Enter your name Player 1");
    document.querySelector("h1").innerHTML = name+"🥇Wins";
}
else if(num1 > num){
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins";
    let name1 = prompt("Please Enter your Name Player 2")
    document.querySelector("h1").innerHTML = name1+"🥇Wins";
}
else{
    document.querySelector("h1").innerHTML = "Draw"
}


