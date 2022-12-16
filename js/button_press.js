function buttonclick(obj) {
    if(obj.className == "number") {
        document.getElementById("display").value += obj.innerHTML;
    } 
    if(obj.className == "operator") {
        if(document.getElementById("display").value == "") {
            document.getElementById("display").value += obj.innerHTML + " ";
        } else {
            document.getElementById("display").value += " " + obj.innerHTML + " ";
        }
    }
}

function clear_backspace() {
    if(document.getElementById("display").value[document.getElementById("display").value.length - 1] == " ") {
        document.getElementById("display").value = document.getElementById("display").value.slice(0, -3);
    } else {
        document.getElementById("display").value = document.getElementById("display").value.slice(0, -1);
    }
}

function clear_all() {
    document.getElementById("display").value = "";
}

function calculate() {
    document.getElementById("display").value = math.evaluate(document.getElementById("display").value);
}