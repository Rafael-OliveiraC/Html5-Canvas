window.onload = function(){
    //Chart data
    const data = [
        {label: 'Jan', value: getRandomInt(0,200)},
        {label: 'Feb', value: getRandomInt(0,200)},
        {label: 'Mar', value: getRandomInt(0,200)},
        {label: 'Apr', value: getRandomInt(0,200)},
        {label: 'May', value: getRandomInt(0,200)},
    ]

    //Chart Specifications
    const targetId = 'chart';
    const canvasWidth = 600;
    const canvasHeight = 450;

    //Create Chart
    var chart = new BarChart(targetId, canvasWidth, canvasHeight, data);

}

function getRandomInt(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
