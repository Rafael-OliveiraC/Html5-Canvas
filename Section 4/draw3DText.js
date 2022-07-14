window.onload = () => {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");




    draw3DText("Hello World", 100, 100, "normal 600 40px monospace", "red", 10);

    function draw3DText(text,x,y,style,color,size){
        ctx.font = style;
        ctx.fillStyle = 'black';
    
        for(let i=0;i<size;i++){
            ctx.fillText(text, x-i, y-i);
        }
    
        ctx.fillStyle = color;
        ctx.fillText(text, x, y);
    }
}

