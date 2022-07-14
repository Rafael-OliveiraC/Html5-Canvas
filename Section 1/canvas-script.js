var canvas = document.getElementById("hello-world");
var ctx = canvas.getContext("2d");

ctx.fillStyle = "rgb(200,0,0)"; //Define a cor do retangulo
ctx.fillRect(10, 40, 30, 70); //Desenha o retangulo

ctx.fillStyle = "rgb(0,0,200)"; //Define a cor do retangulo
ctx.fillRect(50, 40, 30, 70); //Desenha o retangulo

ctx.fillStyle = "rgb(0,200,0)"; //Define a cor do retangulo 
ctx.fillRect(90, 40, 30, 70); //Desenha o retangulo
