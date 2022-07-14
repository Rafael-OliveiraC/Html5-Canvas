window.onload = () => {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    const sides = 5;
    const rarius = 100;
    const centerX = 400;
    const centerY = 300;
    const startAngle = 200;
    const angle = (2 * Math.PI) / sides;

    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.lineWidth = 5;
    ctx.lineJoin = "round";

    const beginX = centerX + rarius * Math.cos(startAngle);
    const beginY = centerY - rarius * Math.sin(startAngle);

    ctx.moveTo(beginX, beginY);
    
    for(let i=1; i<sides; i++) {
        const currentAngle = startAngle + i * angle;
        const currentPointX = centerX + rarius * Math.cos(currentAngle);
        const currentPointY = centerY - rarius * Math.sin(currentAngle);

        ctx.lineTo(currentPointX, currentPointY);
    }
    
    ctx.closePath();
    ctx.stroke();
}