window.onload = () => {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    /* Desenha um retângulo
    ctx.strokeStyle = 'red'
    ctx.lineWidth = 5;
    ctx.lineJoin = 'round';
    ctx.fillStyle = 'gray';
    ctx.rect(100,250,200,200)
    ctx.stroke();
    ctx.fill();

    // Retangulo preenchido
    ctx.fillStyle = 'green';
    ctx.fillRect(100,100,100,100);

    // Somente a borda do retangulo
    ctx.strokeStyle = 'blue';
    ctx.strokeRect(100,100,100,100);

    // Limpa o canvas
    ctx.clearRect(125,125,50,50);
    */

    const lightCell = "#ddb180"
    const darkCell = "#8c5e3d"

    //Frame
    ctx.strokeStyle = 'black'
    ctx.strokeRect(250,100,400,400)

    //Células
    for(let i = 0; i < 8; i++){
        for(let j = 0; j < 8; j++){
            if((i + j) % 2 == 0){
                ctx.fillStyle = lightCell;
            }else{
                ctx.fillStyle = darkCell;
            }
            ctx.fillRect(250 + i * 50, 100 + j * 50, 50, 50);
        }
    }

}