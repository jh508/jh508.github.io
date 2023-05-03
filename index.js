
const text = document.getElementById("changeText");
const gitIcon = document.getElementById("gitIcon");
const textArr = ["BACK-END", "FRONT-END", "GAME"];


let count = 0;
function typingEffect(){
    count++;
    if(count == textArr.length){
        count = 0;
    }

    text.innerHTML = "I'm a " + textArr[count] + " Developer";

}

setInterval(typingEffect, 3000);


