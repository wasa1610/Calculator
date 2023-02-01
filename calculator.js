var display = document.getElementById("screen2");

function addition(){
display.innerHTML += "+";
}

function divide(){
    display.innerHTML += "/";
    }

function subtraction(){
    display.innerHTML += "-";
    }

function multiply(){
    display.innerHTML += "*";
    }

function result(){
display.innerHTML =  eval(display.innerHTML).toFixed(4);
}

function reset(){
display.innerHTML = " ";
}

function wakeScreen(){
    display.innerHTML = "";  
 }

function add1(){
    display.innerHTML += "1";
}

function add2(){
    display.innerHTML += "2";
}

function add3(){
    display.innerHTML += "3";
}

function add4(){
    display.innerHTML+= "4";
}

function add5(){
    display.innerHTML += "5";
}

function add6(){
    display.innerHTML += "6";
}

function add7(){
    display.innerHTML += "7";
}

function add8(){
    display.innerHTML += "8";
}

function add9(){
    display.innerHTML += "9";
}

function add0(){
    display.innerHTML += "0";
}

function decimal(){
    display.innerHTML += ".";
}

function squareRoot(){
    var rooted = Math.pow(display.innerHTML,1/2);
    rooted = rooted.toFixed(2);
    display.innerHTML = rooted;
}

function percentage(){
var decimal =  display.innerHTML * 0.01;
display.innerHTML = decimal.toFixed(3);

}
