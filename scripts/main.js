var colours = {
    cream: '#ebc294', mustard: '#d5a501', lilac: '#d3bbdd', orange: '#d15925', darkGrey: '#2e3235', lightGrey: '#bfbcb5', olive: '#9a8630' };
var canvas = document.getElementById('shapes');
var context;
var w = window.innerWidth;
var h = window.innerHeight;
var alpha = 60. / 180 * Math.PI;
var shapes = [];
var triX1, triY1, triX2, triY2, triX3, triY3;
var circX, circY, circRadius;
var squareX, squareY, squareSize, squareAngle;
var frameCounter = 0;
var cx, cy, sx, sy, tx, ty;




$('.nav-item').click(function (e) {
    e.preventDefault(); //will stop the link href to call the blog page

    var goToPage = $(this).attr("data-link");

    if (goToPage === "/") {
        $('.nav-page').addClass('down');
    } else {
        $('.overlay').addClass('up');
    }

    setTimeout(function () {
        window.location.href = goToPage;
    }, 2000);
});


$('.sticker').hover(function (e) {
    $(this).toggleClass("active");
    $(this).parent().find(".sticker-text").toggleClass("active");
});
$('.sticker active').hover(function (e) {
    $(this).toggleClass("active");
    $(this).parent().find(".sticker-text").toggleClass("active");
});

$('.jobName').click(function (e) {
    toggleJob(this);
});

function toggleJob(item) {
    var clickedItem = $(item).parent().find(".jobDuties");
   clickedItem.toggleClass("active");
   $(".jobDuties").not(clickedItem).removeClass('active');
}




////////////////////////////////////
$(document).ready(function () {

    if (canvas !== null) {
        canvas.width = w;
        canvas.height = h;

        if (canvas.getContext) {
            // drawing code here
            context = canvas.getContext('2d');
            context.fillStyle = colours.lilac;
            context.strokeStyle = colours.lilac;
            init();
            window.requestAnimationFrame(draw);

        } else {
            // canvas-unsupported code here
        }
    }


    if (getCookie("firstLoad") != "") {
        $("body").removeClass("preload");
        $('body').addClass('home');
        $('.navigation').addClass('loaded');
        // set cookie now
        setCookie("firstLoad", "loaded", 1);
    } 

    
});
//////////////////////////////////////

function getRandomInt(min, max) {
    return Math.random() * (max - min) + min;
}

function init() {
    cx = getRandomInt(-0.5, 0.5);
    cy = cx;
    sx = getRandomInt(-0.5, 0.5);
    sy = sx;
    tx = getRandomInt(-0.5, 0.5);
    ty = tx;

    // initialise triangle position
    triX1 = getRandomInt(0,canvas.width);
    triY1 = getRandomInt(0,canvas.height);
    triX2 = getRandomInt(0,canvas.width);
    triY2 = getRandomInt(0,canvas.height);
    triX3 = Math.round(triX1 + Math.cos(alpha) * (triX2 - triX1) + Math.sin(alpha) * (triY2 - triY1));
    triY3 = Math.round(triY1 + Math.sin(-alpha) * (triX2 - triX1) + Math.cos(alpha) * (triY2 - triY1));

    // initialise circle position
    circX = getRandomInt(0,canvas.width);
    circY = getRandomInt(0,canvas.height);
    circRadius = getRandomInt(25,canvas.width) / 8;

    // initialise square position
    squareX = getRandomInt(0,canvas.width);
    squareY = getRandomInt(0, canvas.height);
    squareAngle = Math.PI / 180 * getRandomInt(0, 360);
    squareSize = getRandomInt(50, canvas.width) / 3;
}

function draw() {
    frameCounter++;
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawTriangle();
    drawCircle();
    drawSquare();
    window.requestAnimationFrame(draw);
}

function drawSquare() {
    context.save();
    context.rotate(squareAngle);
    context.fillRect(squareX, squareY, squareSize, squareSize);
    context.restore();

    if (squareX < 0 || squareX > canvas.width) sx = -sx;
    if (squareY < 0 || squareY > canvas.height) sy = -sy;

    squareX = squareX + sx;
    squareY = squareY + sy;
}

function drawTriangle() {

    context.beginPath();
    context.moveTo(triX1,triY1);
    context.lineTo(triX2, triY2);
    context.lineTo(triX3, triY3);
    context.fill();

    if (triX1 < 0 || triX1 > canvas.width || triX2 < 0 || triX2 > canvas.width || triX3 < 0 || triX3 > canvas.width) {
        tx = -tx;
    }
    if (triY1 < 0 || triY1 > canvas.height || triY2 < 0 || triY2 > canvas.height || triY3 < 0 || triY3 > canvas.height) {
        ty = -ty;
    }

    triX1 = triX1 + tx;
    triY1 = triY1 + ty;
    triX2 = triX2 + tx;
    triY2 = triY2 + ty;
    triX3 = triX3 + tx;
    triY3 = triY3 + ty;
}

function drawCircle() {
    context.beginPath();
    context.arc(circX, circY, circRadius, 0, Math.PI * 2, true);
    context.fill();

    if (circX-circRadius < 0 || circX+circRadius > canvas.width) {
        cx = -cx;
    }
    if (circY-circRadius < 0 || circY+circRadius > canvas.height) {
        cy = -cy;
    }
    circX = circX + cx;
    circY = circY + cy;
}

function drawWavy() {
    context.beginPath();
    context.moveTo(50, 50);
    context.bezierCurveTo(120, -100, 200, 250, 250, 50);
    context.bezierCurveTo(300, -100, 350, 250, 430, 50);
    context.bezierCurveTo(500, -100, 500, 250, 630, 50);
    context.lineWidth = Math.random() * 50;
    context.lineCap = 'round';
    context.stroke();
}



function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
