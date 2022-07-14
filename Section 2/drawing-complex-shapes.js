window.onload = () => {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    //Desenha as linhas
    ctx.beginPath(); //Reseta o desenho
    ctx.lineCap = "butt"; //Define o tipo de linha
    ctx.lineJoin = "miter"; //Define o tipo de junção
    ctx.strokeStyle = "rgb(200,0,0)"; //Define a cor da linha
    ctx.lineWidth = 10; //Define a largura da linha
    ctx.shadowColor = "rgb(0,0,0)"; //Define a cor do sombreamento
    ctx.shadowBlur = 5; //Define o tamanho do sombreamento
    ctx.shadowOffsetX = 5; //Define o deslocamento do sombreamento
    ctx.shadowOffsetY = 5; //Define o deslocamento do sombreamento
    ctx.moveTo(10, 30); //Move o ponto de desenho (x,y)
    ctx.lineTo(130, 30); //Desenha a linha até o ponto (x,y)
    ctx.lineTo(130, 50); //Desenha a linha até o ponto (x,y)
    ctx.lineTo(200, 50); //Desenha a linha até o ponto (x,y)
    ctx.stroke(); //Desenha a linha

    ctx.beginPath();
    ctx.lineCap = "round"
    ctx.lineJoin = "bevel";
    ctx.strokeStyle = "rgb(0,200,0)";
    ctx.lineWidth = 10;
    ctx.shadowColor = "rgb(0,0,0)";
    ctx.shadowBlur = 0;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.moveTo(10, 50);
    ctx.lineTo(110, 50);
    ctx.lineTo(110, 70);
    ctx.lineTo(200, 70);
    ctx.stroke();

    ctx.beginPath();
    ctx.lineCap = "square";
    ctx.lineJoin = "round";
    ctx.strokeStyle = "rgb(0,0,200)";
    ctx.lineWidth = 10;
    ctx.shadowColor = "rgb(0,0,0)";
    ctx.shadowBlur = 5;
    ctx.shadowOffsetX = -5;
    ctx.shadowOffsetY = -5;
    ctx.moveTo(10, 70);
    ctx.lineTo(90, 70);
    ctx.lineTo(90, 90);
    ctx.lineTo(200, 90);
    ctx.stroke();
}