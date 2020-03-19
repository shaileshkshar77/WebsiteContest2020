function calculate1() {
    var wt = parseFloat(document.getElementById("wt").value);
    var ht = parseFloat(document.getElementById("ht").value);
    var bmi = wt / (ht * ht);
    var res = document.querySelector("#result");
    res.textContent = wt;
}
var button = document.querySelector("#calculate");
button.addEventListener("click", calculate1);