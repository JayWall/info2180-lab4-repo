var gameLost = false;
var start = false;
var instruct = "";

// Exercise 1
function turnRed() {
    var walls = document.getElementsByClassName("boundary");
    for (var i=0; i < walls.length; i++) {
        walls[i].setAttribute("class", "boundary youlose");
    }

    gameLost = true;
    document.getElementById("status").textContent = "Game Over... You Lose";
}

// Exercise 2
function checkWalls(){
    var walls = document.getElementsByClassName("boundary");
    for (var i=0; i < walls.length; i++) {
        walls[i].onmouseover = function(){
            turnRed();
        };
    }
}

// Exercise Three
function checkWin(){
    var win = document.getElementById("end");
    win.onmouseover = function() {
        if (!gameLost) {
            var status = document.getElementById("status");
            status.textContent = "Ding Ding Ding! Winner!!";
        }
    };
}


// Exercise 4 5
function resetIt(){
    // Start game and blocks cheaters
    var sbox = document.getElementById("start");
    
    sbox.onmouseover = function () {
        start = true;
    };
    
    startBox.onclick = function() {
        var walls =  document.querySelectorAll(".youlose");
        for (var i=0; i < walls.length; i++) {
            walls[i].setAttribute("class", "boundary");
        }

        gameLost = false;
        document.getElementById("status").textContent = instruct;
    };
}

// Cheating
function nonCheating(){
    document.getElementsByTagName("BODY")[0].onmousemove = function(event) {
        var x = event.clientX;
        var y = event.clientY;
        
        var top = document.getElementById("maze").offsetTop;
        var height = document.getElementById("maze").offsetHeight;
        var left = document.getElementById("maze").offsetLeft;
        var width = document.getElementById("maze").offsetWidth;
        
        if (start && x < left || y < top || y > (top + height) ) {
            turnRed();
        }
        
    };
    
}

window.onload = function() {
    instruct = document.getElementById("status").textContent;
    checkWalls();
    checkWin();
    resetIt();  
    nonCheating();  
}