var gameLost = false;
var start = false;
var instruct = "";

function turnRed() {
    var walls = document.getElementsByClassName("boundary");
    for (var i=0; i < walls.length; i++) {
        walls[i].setAttribute("class", "boundary youlose");
    }

    gameLost = true;
    document.getElementById("status").textContent = "Game Over... You Lose";
}




window.onload = function() {
    instruct = document.getElementById("status").textContent;
    checkWalls();
    
}