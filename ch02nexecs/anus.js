var bdayear = prompt("Qual é tua data de nascimento?", "0");

function getYear() {
	var currentdate = new Date();
	var datetime = currentdate.getFullYear()
	return datetime
}

function ageFun(getYear, bdayear) {
	var age = getYear - bdayear;
	return age;
}


document.write(age);