var chuvianselement = document.getElementById("chuviansValue");

var chuvians = 0;
// main.js
function chuvianClick(n) {
    chuvians += n;
    chuvianselement.textContent = chuvians;
}
