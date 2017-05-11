var start = new Date().getTime();
var shape = document.getElementById("shape");

function randomColor() {
    var hexa = "0123456789ABCDEF".split('');
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += hexa[Math.floor(Math.random() * 16)];
    }
    return color;
}

function makeShapeAppear() {
    var side = (Math.random() * 200) + 100;
    shape.style.display = "block";
    shape.style.top = (Math.random() * 400) + "px";
    shape.style.left = (Math.random() * 400) + "px";
    shape.style.width = side + "px";
    shape.style.height = side + "px";
    shape.style.backgroundColor = randomColor();
    shape.style.borderRadius = "0";
    if (Math.random() > 0.5) {
        shape.style.borderRadius = "50%";
    }
    start = new Date().getTime();
}

function appearAfterDelay() {
    setTimeout(makeShapeAppear, Math.random() * 2000);
}

shape.onclick = function () {
    var end = new Date().getTime();
    var interval = (end - start) / 1000;
    document.getElementById("time").innerHTML = interval + "s";
    
    shape.style.display = "none";
    appearAfterDelay();
};

appearAfterDelay();