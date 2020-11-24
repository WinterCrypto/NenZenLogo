//jshint esversion:6
var looper;
var looper2;
var looper3;
var degrees = 0;
var degrees2 = 0;
var degrees3 = 0;

const rotateAnimation = (logo, speed) => {
    let elem = document.getElementById("logo");
    if (navigator.userAgent.match("Chrome")) {
        elem.style.WebkitTransform = "rotate(" + degrees + "deg)";
    } else if (navigator.userAgent.match("Firefox")) {
        elem.style.MozTransform = "rotate(" + degrees + "deg)";
    } else if (navigator.userAgent.match("MSIE")) {
        elem.style.msTransform = "rotate(" + degrees + "deg)";
    } else if (navigator.userAgent.match("Opera")) {
        elem.style.OTransform = "rotate(" + degrees + "deg)";
    } else {
        elem.style.transform = "rotate(" + degrees + "deg)";
    }
    looper = setTimeout('rotateAnimation(\'' + logo + '\',' + speed + ')', speed);
    degrees++;
    if (degrees > 90) {
        degrees = 90;
    }
    document.getElementById("click").innerHTML = "Click (" + degrees + "deg)";

};

const rotateAnimation2 = (logo, speed) => {
    let elem = document.getElementById("logo2");
    if (navigator.userAgent.match("Chrome")) {
        elem.style.WebkitTransform = "rotate(" + degrees2 + "deg)";
    } else if (navigator.userAgent.match("Firefox")) {
        elem.style.MozTransform = "rotate(" + degrees2 + "deg)";
    } else if (navigator.userAgent.match("MSIE")) {
        elem.style.msTransform = "rotate(" + degrees2 + "deg)";
    } else if (navigator.userAgent.match("Opera")) {
        elem.style.OTransform = "rotate(" + degrees2 + "deg)";
    } else {
        elem.style.transform = "rotate(" + degrees2 + "deg)";
    }
    looper2 = setTimeout('rotateAnimation2(\'' + logo + '\',' + speed + ')', speed);
    degrees2++;
    if (degrees2 > 90) {
        degrees2 = 90;
    }
    document.getElementById("hover").innerHTML = "Hover (" + degrees2 + "deg)";

};

const rotateAnimation3 = (logo, speed) => {
    let elem = document.getElementById("logo3");
    if (navigator.userAgent.match("Chrome")) {
        elem.style.WebkitTransform = "rotate(" + degrees3 + "deg)";
    } else if (navigator.userAgent.match("Firefox")) {
        elem.style.MozTransform = "rotate(" + degrees3 + "deg)";
    } else if (navigator.userAgent.match("MSIE")) {
        elem.style.msTransform = "rotate(" + degrees3 + "deg)";
    } else if (navigator.userAgent.match("Opera")) {
        elem.style.OTransform = "rotate(" + degrees3 + "deg)";
    } else {
        elem.style.transform = "rotate(" + degrees3 + "deg)";
    }
    looper3 = setTimeout('rotateAnimation3(\'' + logo + '\',' + speed + ')', speed);
    degrees3++;
    if (degrees3 > 359) {
        degrees3 = 1;
    }
    document.getElementById("infinity").innerHTML = "Click Infinity (" + degrees3 + "deg)";
    document.getElementById("infinity").innerHTML = `Click Infinity (${degrees3}deg)`;

};

document.getElementById("logo").addEventListener("click", function () {
    rotateAnimation("logo", 45);
});

document.getElementById("logo2").addEventListener("mouseover", function () {
    rotateAnimation2("logo2", 45);
});


document.getElementById("logo3").addEventListener("click", function () {
    rotateAnimation3("logo3", 45);
});


