let display = document.getElementById("input-box")
let buttons = document.querySelectorAll("button")

String = "";
let arr = Array.from(buttons);

function Delete() {
    String = String.substring(0, String.length - 1);
    display.value = String;
}
function Clear() {
    String = "";
    display.value = String;
}
function Evaluate() {
    String = eval(String);
    display.value = String;
}
function Input(input) {
    String += input;
    display.value = String;
}

arr.forEach(bttn => {
    bttn.addEventListener("click", (e) => {
        if (e.target.innerHTML == "Del") {
            Delete();
        } else if (e.target.innerHTML == "AC") {
            Clear();
        } else if (e.target.innerHTML == "=") {
            Evaluate();
        } else {
            Input(e.target.innerHTML);
        }
    });
});