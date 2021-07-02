function insert(numberx){
    var number = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = number + numberx;
}

function result(){
    var display = document.getElementById("display").innerHTML;
    if(display){
        document.getElementById("display").innerHTML = eval(display);
    }
    else {
        document.getElementById("display") = "Insira uma operacao";
    }
}

function clean(){
    document.getElementById("display").innerHTML = "";
}
