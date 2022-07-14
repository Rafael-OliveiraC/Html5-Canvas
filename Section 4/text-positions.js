window.onload = () => {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    //Linha vertical
    ctx.strokeStyle = 'red';
    ctx.moveTo(300, 20);
    ctx.lineTo(300, 430);
    ctx.stroke();

    ctx.font= "italic 400 18px monospace";

    ctx.textAlign = 'start';
    ctx.fillText("start", 300, 20);

    ctx.textAlign = 'left';
    ctx.fillText("left", 300, 100);

    ctx.textAlign = 'center';
    ctx.fillText("center", 300, 180);

    ctx.textAlign = 'right';
    ctx.fillText("right", 300, 260);

    ctx.textAlign = 'end';
    ctx.fillText("end", 300, 340);
    

    ctx.strokeStyle = 'red';
    ctx.moveTo(20, 300);
    ctx.lineTo(580, 300);
    ctx.stroke();

    ctx.textBaseline = 'alphabetic';
    ctx.fillText("alphabetic", 120, 300);

    ctx.textBaseline = 'top';
    ctx.fillText("top", 180, 300);

    ctx.textBaseline = 'middle';
    ctx.fillText("middle", 270, 300);

    ctx.textBaseline = 'bottom';
    ctx.fillText("bottom", 350, 300);

    ctx.textBaseline = 'ideographic';
    ctx.fillText("ideographic", 490, 300);

    ctx.textBaseline = 'hanging';
    ctx.fillText("hanging", 580, 300);

}

