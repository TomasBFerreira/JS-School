var x = prompt("What number should I stop at?", "0");
if (x = NaN){
    document.write("Please pick a number!");
}

var numb1 = 0;
var numb2 = 1;
var pos =1;
var val =0;

while (val < x ) {
    if (pos=1) {
        val=0;
    } else if (pos=2) {
        val=1;
    } else {
        val= numb1+numb2;
    }
    numb1 = numb2;
    numb2 = val;
}
