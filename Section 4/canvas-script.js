window.onload = () => {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    const text = "Hello World";

    ctx.font = "normal 700 24px monospace";
    ctx.shadowColor = "red";
    ctx.shadowBlur = 4;
    ctx.shadowOffsetX = 5;
    ctx.shadowOffsetY = 5;
    ctx.fillText(text, 100, 100);

    ctx.font = "italic 400 48px monospace";
    ctx.shadowColor = "green";
    ctx.shadowBlur = 4;
    ctx.shadowOffsetX = -5;
    ctx.shadowOffsetY = -5;
    ctx.strokeText(text, 100, 200);

}

