window.onload = () => {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    const radian = Math.PI / 180;

    ctx.beginPath();
    ctx.strokeStyle = 'black'
    ctx.lineWidth = 10;
    ctx.fillStyle = 'yellow'
    ctx.moveTo(250,250);
    ctx.lineTo(330,310);
    ctx.arc(250,250,100,37 * radian , 323 * radian, false);
    ctx.lineTo(250,250);
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.arc(250,200,10,0,360 * radian, false);
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.strokeStyle = 'orange';
    ctx.fillStyle = 'orange';
    ctx.arc(600,250,100,143 * radian ,323 * radian, false);
    ctx.stroke();
    ctx.fill()

    ctx.beginPath();
    ctx.strokeStyle = 'orange';
    ctx.fillStyle = 'orange';
    ctx.arc(600,250,100,37 * radian ,217 * radian, false);
    ctx.stroke();
    ctx.fill()

    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.arc(600,200,10,0,360 * radian, false);
    ctx.stroke();
    ctx.fill();
}