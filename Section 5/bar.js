/**
 * 
 *  bar.js
 *  simple bar chart library
 *  22.07.22
 * 
 * @author  Rafael OliveiraC
 * @version 1.0.0
 * 
 */

'use strict';

function BarChart(targetId, width, height, data){
    const chart = this;

    //Specify Configurarions
    chart.configureChart(targetId, width, height, data);

    //Pre Operations
    chart.performPreOperations();

    //Draw chart
    chart.drawChart();

    console.log(chart)

}

BarChart.prototype.configureChart = function(targetId, width, height, data){
    const chart = this;

    chart.setCanvasParameters(targetId, width, height, data);
    chart.setChartParameters();
    
}

BarChart.prototype.setCanvasParameters = function(targetId, width, height, data){
    const chart = this;

    chart.id = targetId;
    chart.width = width;
    chart.height = height;
    chart.data = data;
}

BarChart.prototype.setChartParameters = function(){
    const chart = this;

    // Axis config
    chart.axisRadio = 10;
    chart.verticalMargin = (chart.height * chart.axisRadio) / 100;
    chart.horizontalMargin = (chart.width * chart.axisRadio) / 100;
    chart.axisColor = '#b1b1b1';
    chart.axisWidth = 0.75;

    //Label config
    chart.fontRadio = 3;
    chart.fontFamily = 'times';
    chart.fontStyle = 'normal';
    chart.fontWeight = '300';
    chart.fontColor = '#666';
    chart.verticalFontSize = (chart.height * chart.fontRadio) / 100;
    chart.horizontalFontSize = (chart.width * chart.fontRadio) / 100;

    //Guideline config
    chart.guidelineColor = '#ddd';
    chart.guidelineWidth = 0.5;
}

BarChart.prototype.performPreOperations = function(){
    const chart = this;

    // Create canvas
    chart.createCanvas();

    // Get data
    chart.handleData();

    // Prepare Data
    chart.prepareData();


}

BarChart.prototype.createCanvas = function(){
    const chart = this;

    var canvas = document.createElement('canvas');
    canvas.id = chart.id + '-' + Math.random();
    canvas.width = chart.width;
    canvas.height = chart.height;

    document.getElementById(chart.id).innerHTML = ''; // Clear container
    document.getElementById(chart.id).appendChild(canvas); // Add canvas to container

    // Add canvas to chart object
    chart.canvas = canvas;
    chart.context = canvas.getContext('2d');


}

BarChart.prototype.handleData = function(){
    var chart = this;

    // Data.sets
    chart.labels = [];
    chart.values = [];

    //Handle data
    chart.data.forEach(function(item){
        chart.labels.push(item.label);
        chart.values.push(item.value);
    });

}

BarChart.prototype.prepareData = function(){
    const chart = this;

    //Global Variables
    chart.itemsNum = chart.data.length;
    chart.maxValue = Math.max.apply(null, chart.values);
    chart.minValue = Math.min.apply(null, chart.values);

    // Axis Specifications
    chart.verticalAxisWidth = chart.height - 2 * chart.verticalMargin;
    chart.horizontalAxisWidth = chart.width - 2 * chart.horizontalMargin;

    // Label Specifications
    chart.verticalUpperBound = Math.ceil(chart.maxValue / 10) * 10;
    chart.verticalLabelFreq = chart.verticalUpperBound / chart.itemsNum;
    chart.horizontalLabelFreq = chart.horizontalAxisWidth / chart.itemsNum;
}

BarChart.prototype.drawChart = function(){
    const chart = this;

    //Draw Axis
    chart.drawLineAxis();

    //Draw Labels
    chart.drawLabels();

    //Horizontal GuideLines
    chart.drawHorizontalGuideLines();

    //Bars
    chart.drawBars();
}

BarChart.prototype.drawLabels = function(){
    const chart = this;

    //Text Specifications
    const labelFont =  chart.fontStyle + ' ' + chart.fontWeight + ' ' + chart.verticalFontSize + 'px ' + chart.fontFamily;
    chart.context.font = labelFont;
    chart.context.textAlign = 'right';
    chart.context.fillStyle = chart.fontColor;

    //Scale values
    var scaledVerticalLabelFreq = (chart.verticalAxisWidth / chart.verticalUpperBound) * chart.verticalLabelFreq;

    //Draw labels
    for(var i = 0; i <= chart.itemsNum; i++){
        var labelText = chart.verticalUpperBound - i * chart.verticalLabelFreq;
        var verticalLabelX = chart.horizontalMargin - chart.horizontalMargin / chart.axisRadio;
        var verticalLabelY = chart.verticalMargin + i * scaledVerticalLabelFreq;

        chart.context.fillText(labelText, verticalLabelX, verticalLabelY);
    }

    chart.context.textAlign = 'center';
    chart.context.textBaseline = 'top';
    for(var i = 0; i < chart.itemsNum; i++){
        var horizontalLabelX = chart.horizontalMargin + i * chart.horizontalLabelFreq + chart.horizontalLabelFreq / 2
        var horizontalLabelY = chart.height - chart.verticalMargin + chart.verticalMargin / chart.axisRadio;

        chart.context.fillText(chart.labels[i], horizontalLabelX, horizontalLabelY);
    }
}

BarChart.prototype.drawLineAxis = function(){
    const chart = this;

    //Vertical Axis
    chart.context.beginPath();
    chart.context.strokeStyle = chart.axisColor;
    chart.context.lineWidth = chart.axisWidth;
    chart.context.moveTo(chart.horizontalMargin, chart.verticalMargin);
    chart.context.lineTo(chart.horizontalMargin, chart.height - chart.verticalMargin);
    chart.context.stroke();

    //Horizontal Axis
    chart.context.beginPath();
    chart.context.strokeStyle = chart.axisColor;
    chart.context.lineWidth = chart.axisWidth;
    chart.context.moveTo(chart.horizontalMargin, chart.height - chart.verticalMargin);
    chart.context.lineTo(chart.width - chart.horizontalMargin, chart.height - chart.verticalMargin);
    chart.context.stroke();
}

BarChart.prototype.drawHorizontalGuideLines = function(){
    const chart = this;

    //Specifications
    chart.context.strokeStyle = chart.guidelineColor;
    chart.context.lineWidth = chart.guidelineWidth;


    
    var scaledVerticalLabelFreq = (chart.verticalAxisWidth / chart.verticalUpperBound) * chart.verticalLabelFreq;

    //Draw labels
    for(var i = 0; i <= chart.itemsNum; i++){ 
        //Start point
        var horizontalGuideLineStartX = chart.horizontalMargin;
        var horizontalGuideLineStartY = chart.verticalMargin + i * scaledVerticalLabelFreq;

        //End point
        var horizontalGuideLineEndX = chart.horizontalMargin + chart.horizontalAxisWidth;
        var horizontalGuideLineEndY = chart.verticalMargin + i * scaledVerticalLabelFreq;

        chart.context.beginPath();
        chart.context.moveTo(horizontalGuideLineStartX, horizontalGuideLineStartY);
        chart.context.lineTo(horizontalGuideLineEndX, horizontalGuideLineEndY);
        chart.context.stroke();


    }
}

BarChart.prototype.drawBars = function(){
    const chart = this;

    for(var i=0;i<chart.itemsNum;i++){
        const color = chart.createRandomRGBColor();
        var fillColor = 'rgba(' + color.r + ',' + color.g + ',' + color.b + ', 0.4)';
        var borderColor = 'rgb(' + color.r + ',' + color.g + ',' + color.b + ')';

        chart.context.beginPath();
        
        var barX = chart.horizontalMargin + i * chart.horizontalLabelFreq + chart.horizontalLabelFreq / chart.axisRadio;
        var barY = chart.height - chart.verticalMargin;
        var barWidth = chart.horizontalLabelFreq - 2 * chart.horizontalLabelFreq / chart.axisRadio;
        var barHeight = -1 * chart.verticalAxisWidth * chart.values[i] / chart.maxValue;

        chart.context.fillStyle = fillColor;
        chart.context.strokeStyle = borderColor;

        chart.context.rect(barX, barY, barWidth, barHeight);
        chart.context.stroke();
        chart.context.fill();
    }

}

BarChart.prototype.createRandomRGBColor = function(){
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return {r: red, g: green, b: blue};   
}
