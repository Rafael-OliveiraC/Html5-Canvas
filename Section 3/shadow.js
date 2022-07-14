window.onload = () => {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    var radian = Math.PI / 180;

    //Retangulo
    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.fillStyle = "green";
    ctx.shadowColor = "black";
    ctx.shadowOffsetX = 5;
    ctx.shadowOffsetY = 5;
    ctx.shadowBlur = 5;
    ctx.rect(150,100,150,400)
    ctx.stroke();
    ctx.fill();

    //Circulo
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.fillStyle = "red";
    ctx.shadowColor = "black";
    ctx.shadowOffsetX = -5;
    ctx.shadowOffsetY = -5;
    ctx.shadowBlur = 5;
    ctx.arc(650,300,100,0 * radian, 360 * radian, false);
    ctx.stroke();
    ctx.fill();
}