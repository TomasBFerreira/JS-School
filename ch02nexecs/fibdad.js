var numb1 = 0;
var numb2 = 1;
var pos = 1;
var val = 0;
var stop = 100000

 while (val < stop) {
    if (pos == 1) {
        val = 0;
    } else if (pos == 2) {
        val = 1;
    } else {
        val = numb1 + numb2;
        numb1 = numb2;
        numb2 = val;
    }
    if (val >= stop) {
        break;
    }
    print(val, pos);
    pos++;
}
