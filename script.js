
// This function clears all the values

function  clearScreen() {
    document.getElementById("result").value="";
}

// This function displays the value

function display(value){

    document.getElementById("result").value += value;
}

// This function evaluates the expression and returns the result

function calculate() {
    var x = document.getElementById("result").value;
    var y = eval(x);
    document.getElementById("result").value = y;
}