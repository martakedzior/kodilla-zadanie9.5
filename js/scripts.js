// scripts.js
// Excercise 9.5

var getButton = document.getElementsByClassName("button");
var n = document.getElementsByClassName("button").length; 

function getButtonText() {
    var i;
	for (i=0; i<n; i++) {
		var buttonText = document.getElementsByClassName("button")[i].innerText;
		console.log(buttonText);
	}
}

getButtonText(n);