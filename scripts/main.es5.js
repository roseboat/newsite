﻿"use strict";

//window.requestAnimFrame = (function () {
//    return window.requestAnimationFrame ||
//        window.webkitRequestAnimationFrame ||
//        window.mozRequestAnimationFrame ||
//        function (callback) {
//            window.setTimeout(callback, 1000 / 60);
//        };
//})();
//var c = document.getElementById('canvas');
//var ctx = c.getContext('2d');

//var w = window.innerWidth;
//var h = window.innerHeight;

//c.width = w;
//c.height = h;

//var paramX = 0;
//var paramY = 0;
//var rad = (Math.PI / 180);

//var mouseX = 0;
//var mouseY = 0;

//var particles = [];

//document.addEventListener('click', function (e) {
//    mouseX = e.clientX || e.pageX;
//    mouseY = e.clientY || e.pageY
//    console.log(paramX);

//    particles.push(new createParticle);
//}, false);

//for (i = 0; i < nbOfParticles; i++) {
//    setTimeout(function () {
//        mouseX = Math.random() * c.width; //first creation: random x
//        mouseY = Math.random() * c.height; //first creation: random y

//        particles.push(new createParticle);
//    }, i * 15);
//}

//function createParticle() {

//    this.x = mouseX;
//    this.y = mouseY;
//    this.r = Math.floor(Math.random() * 30) + 5; //size - rad
//    this.a = -90; //angle
//    this.vy = Math.floor(Math.random() * 5) + 2; //velocity y
//    var color1 = '#e6e8fa';
//    var color2 = '#f1c5cf';
//    var color3 = '#13e3cf';
//    var array = [color1, color2, color3];
//    this.color = array[Math.floor(Math.random() * 3)]; //one of the three colors
//    this.life = Math.random() * 30;

//}

//function drawParticles() {
//    requestAnimFrame(drawParticles);
//    ctx.clearRect(0, 0, w, h);
//    ctx.fillStyle = "#e3f2f1";
//    ctx.fillRect(0, 0, w, h);

//    for (t = 0; t < particles.length; t++) {
//        var p = particles[t];
//        ctx.beginPath();
//        ctx.fillStyle = p.color;
//        var x1 = p.x + p.r * Math.cos(p.a * rad);
//        var y1 = p.y + p.r * Math.sin(p.a * rad);
//        var cx1 = p.x + p.r * Math.cos((p.a + 22.5) * rad);
//        var cy1 = p.y + p.r * Math.sin((p.a + 22.5) * rad);
//        var cx2 = p.x + p.r * Math.cos((p.a - 22.5) * rad);
//        var cy2 = p.y + p.r * Math.sin((p.a - 22.5) * rad);
//        var chord = 2 * p.r * Math.sin(22.5 * rad / 2);

//        ctx.beginPath();
//        ctx.moveTo(x1, y1);
//        ctx.arc(cx1, cy1, chord, (270 + p.a) * rad, (270 + p.a + 225) * rad);
//        ctx.lineTo(p.x, p.y);
//        ctx.moveTo(x1, y1);
//        ctx.arc(cx2, cy2, chord, (90 + p.a) * rad, (90 + p.a + 135) * rad, true);
//        ctx.lineTo(p.x, p.y);
//        ctx.fill();

//        p.y -= p.vy;

//        p.life *= 0.8;

//    }
//}

//drawParticles();

