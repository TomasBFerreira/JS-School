function getCurrentYear() {
	var today = new Date();

	return today.getFullYear();
}

function calcAge(y) {
	var age = getCurrentYear() - y;
	
	return age;
}

function calcFutureAge(y, f) {
	var age = f - y;

	return age;
}

var y = prompt("What is your birth year?", "0");
var f = prompt("What year would you like to know of?", "0");
document.write(calcFutureAge(y, f));