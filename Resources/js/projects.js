
const vr_game = document.getElementById("vr_game");
const zombie_game = document.getElementById("zombie_game");
const traffic_game = document.getElementById("traffic_game");
const indexUrl = "https://jh508.github.io/";

vr_game.addEventListener("click", function(e){
    window.location.href = indexUrl + "eto.html";
})

zombie_game.addEventListener("click", function (e) {
    window.location.href = indexUrl + "zombieGame.html";
})

traffic_game.addEventListener("click", function (e) {
    window.location.href = indexUrl + "trafficGame.html";
})
