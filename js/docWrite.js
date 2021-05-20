document.write("<p>This is inserted.</p>");
document.write("<p>Another paragraph</p>");
function addPara() {
    var para = document.createElement("p");
    var txt = document.createTextNode("hello world");
    para.appendChild(txt);
    var testdiv = document.getElementById("testdiv");
    testdiv.appendChild(para);
}
window.onload = function () {
    var testdiv = document.getElementById("testdiv");
    testdiv.innerHTML = "<p>I inserted <em>this</em> content</p>";
    addPara();
}
