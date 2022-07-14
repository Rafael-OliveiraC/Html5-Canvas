window.onload = () => {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    /*Desenha um circulo
    var radian = Math.PI / 180;

    ctx.beginPath();
    ctx.strokeStyle = "rgb(200,0,0)";
    ctx.lineWidth = 10;
    ctx.arc(100, 100, 50, 0, 360 * radian, false);
    ctx.stroke();
    */

    /*Desenha linha com curvas 1 ponto de eixo
    ctx.beginPath();
    ctx.strokeStyle = "rgb(200,0,0)";
    ctx.lineWidth = 10;
    ctx.moveTo(100,100)
    ctx.quadraticCurveTo(100,0,200,100);//(x1,y1,x2,y2)
    ctx.stroke();
    */

    /*Desenha linha com curvas 2 pontos de eixo
    ctx.beginPath();
    ctx.strokeStyle = "rgb(200,0,0)";
    ctx.lineWidth = 10;
    ctx.moveTo(0,50)
    ctx.bezierCurveTo(50,0,100,100,150,50);//(x1,y1,x2,y2,x3,y3)
    ctx.stroke();
    */

    //Desenha um coração, mostrando os pontos de eixo
    drawBezierCurve(430,130,470,10,670,10,670,180);
    drawQuadraticCurve(670,180,670,380,430,520);

    drawBezierCurve(430,130,400,10,190,10,190,180);
    drawQuadraticCurve(190,180,190,380,430,520);
    

    /*Desenha um coração
    ctx.beginPath();
    ctx.strokeStyle = "rgb(200,0,0)";
    ctx.lineWidth = 10;
    ctx.moveTo(430,130)
    ctx.bezierCurveTo(470,10,670,10,670,180);
    ctx.quadraticCurveTo(670,380,430,520);
    ctx.quadraticCurveTo(190,380,190,180);
    ctx.bezierCurveTo(190,10,400,10,430,130);
    ctx.stroke();
    */
}

function drawQuadraticCurve(startX,startY,controlX,controlY,endX,endY,color,width){
    var canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    const radian = Math.PI / 180;

    ctx.beginPath();
    ctx.strokeStyle = "gray";
    ctx.lineWidth = 2;
    ctx.moveTo(startX, startY);
    ctx.lineTo(controlX, controlY);
    ctx.lineTo(endX, endY);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = color ? color : "rgb(200,0,0)";
    ctx.lineWidth = width ? width : 4;
    ctx.moveTo(startX,startY);
    ctx.quadraticCurveTo(controlX,controlY,endX,endY);//(x1,y1,x2,y2)
    ctx.stroke();

    
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 10;
    ctx.arc(controlX, controlY, 5, 0, 360 * radian, false);
    ctx.stroke();
}

function drawBezierCurve(startX,startY,controlX1,controlY1,controlX2,controlY2,endX,endY,color,width){
    var canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    const radian = Math.PI / 180;

    ctx.beginPath();
    ctx.strokeStyle = "gray";
    ctx.lineWidth = 2;
    ctx.moveTo(startX, startY);
    ctx.lineTo(controlX1, controlY1);
    ctx.lineTo(controlX2, controlY2);
    ctx.lineTo(endX, endY);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = color ? color : "rgb(200,0,0)";
    ctx.lineWidth = width ? width : 4;
    ctx.moveTo(startX,startY);
    ctx.bezierCurveTo(controlX1,controlY1,controlX2,controlY2,endX,endY);//(x1,y1,x2,y2)
    ctx.stroke();

    
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 10;
    ctx.arc(controlX1, controlY1, 5, 0, 360 * radian, false);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 10;
    ctx.arc(controlX2, controlY2, 5, 0, 360 * radian, false);
    ctx.stroke();
}