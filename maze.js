
document.getElementById("boundary1").onmouseover = testerFunction;

function testerFunction(){
	var x = document.getElementByClassName("boundary");
	for (var i=0; i < x.length; i++){
		x[i].style.backgroundColor = "red";
	}

}
/*
document.getElementById("boundary1").onmouseover = function() {mouseOver()};
document.getElementById("boundary1").onmouseout = function() {mouseOut()};

function mouseOver() {
    document.getElementById("boundary1").style.color = "red";
}

function mouseOut() {
    document.getElementById("boundary1").style.color = "black";
}*.



