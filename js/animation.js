function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    }
    else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}
function positionMessage() {
    var elem = document.getElementById("message");
    elem.style.position = "absolute";
    elem.style.left = "50px";
    elem.style.top = "50px";
    moveElement("message", 0, 500, 10);
    //sleep(5000);
    moveElement("message", 500, 500, 10);
    moveElement("message", 800, 800, 1);
}
function sleep (time) {
    var startTime = new Date().getTime() + parseInt(time, 10);
    while (new Date().getTime() < startTime) { }
};
function moveElement(elementID, final_x, final_y, interval) {
    if (!document.getElementById) return false;
    if (!document.getElementById(elementID)) return false;
    var elem = document.getElementById(elementID);
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    if (elem.movement)
        clearTimeout(elem.movement);
    if (xpos == final_x && ypos == final_y)
        return true;
    if (xpos < final_x)
        xpos++;
    if (xpos > final_x)
        xpos--;
    if (ypos < final_y)
        ypos++;
    if (ypos > final_y)
        ypos--;
    console.log(xpos);
    console.log(ypos);
    elem.style.left = xpos + "px";
    elem.style.top = ypos + "px";
    //sleep(interval);
    var repeat = "moveElement('" + elementID + "'," + final_x + "," + final_y + "," + interval + ")";
    //alert(repeat);
    elem.movement = setTimeout(repeat, interval);
}
function move() {
    var elem = document.getElementById("message");
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    if (xpos <= 100)
        xpos = 500
    else xpos = 50;
    if (ypos <= 100)
        ypos = 500;
    else ypos = 50;
    moveElement("message", xpos, ypos, 4);
}
function test() {
    var elem = document.getElementById("message");
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    var repeat;
    var interval = 5;
    var final_x = 0;
    var final_y = 500;
    if (elem.movement)
        clearTimeout(elem.movement);
    while (xpos != 0 || ypos != 500) {
        if (xpos < final_x)
            xpos++;
        if (xpos > final_x)
            xpos--;
        if (ypos < final_y)
            ypos++;
        if (ypos > final_y)
            ypos--;
        console.log(xpos);
        console.log(ypos);
        elem.style.left = xpos + "px";
        elem.style.top = ypos + "px";
        repeat = "test()";
        //alert(repeat);
        elem.movement = setTimeout(repeat, interval);
    }
    final_x = 500;
    final_y = 500;
    while (xpos != 500 || ypos != 500) {
        if (xpos < final_x)
            xpos++;
        if (xpos > final_x)
            xpos--;
        if (ypos < final_y)
            ypos++;
        if (ypos > final_y)
            ypos--;
        elem.style.left = xpos + "px";
        elem.style.top = ypos + "px";
        repeat = "test()";
        //alert(repeat);
        elem.movement = setTimeout(repeat, interval);
    }
    final_x = 500;
    final_y = 0;
    while (xpos != 500 || ypos != 0) {
        if (xpos < final_x)
            xpos++;
        if (xpos > final_x)
            xpos--;
        if (ypos < final_y)
            ypos++;
        if (ypos > final_y)
            ypos--;
        elem.style.left = xpos + "px";
        elem.style.top = ypos + "px";
        repeat = "test()";
        //alert(repeat);
        elem.movement = setTimeout(repeat, interval);
    }
    final_x = 500;
    final_y = 0;
    while (xpos != 0 || ypos != 0) {
        if (xpos < final_x)
            xpos++;
        if (xpos > final_x)
            xpos--;
        if (ypos < final_y)
            ypos++;
        if (ypos > final_y)
            ypos--;
        elem.style.left = xpos + "px";
        elem.style.top = ypos + "px";
        repeat = "test()";
        //alert(repeat);
        elem.movement = setTimeout(repeat, interval);
    }
}
addLoadEvent(positionMessage);