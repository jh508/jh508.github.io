
const text = document.getElementById("changeText");
const projectBtn = document.getElementById("projectBtn");
const contactBtn = document.getElementById("contactBtn")
const gitIcon = document.getElementById("gitIcon");

const indexUrl = "jh508.github.io/"
const textArr = ["BACK-END", "FRONT-END", "GAME"];

projectBtn.addEventListener("click", function(e){
    window.location.href = indexUrl +"projects.html"
})

contactBtn.addEventListener("click", function(e){
    window.location.href = indexUrl + "contact.html";
})

let count = 0;
function typingEffect(){
    count++;
    if(count == textArr.length){
        count = 0;
    }

    text.innerHTML = "I'm a " + textArr[count] + " Developer";

}

setInterval(typingEffect, 3000);


