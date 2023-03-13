
const text = document.getElementById("changeText");
const myBtn = document.getElementById("btn1");
const gitIcon = document.getElementById("gitIcon");
const indexUrl = "http://127.0.0.1:5500/"
const textArr = ["BACK-END", "FRONT-END", "GAME"];

myBtn.addEventListener("click", function(e){
    window.location.href = indexUrl +"projects.html"
})




i = 3000
count = 0;

setInterval(function(){
    count++;
    if(count >= textArr.length){
        count = 0;
    }

    text.innerText = "I'm a " + textArr[count] + " Developer";

}, i)

