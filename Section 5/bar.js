'use strict';

function BarChart(targetId, width, height, data){
    const chart = this;
    chart.configureChart(targetId, width, height, data);

    chart.performPreOperations();
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

    // Axe config
    chart.axeRadio = 10;
    chart.verticalMargin = (chart.height * chart.axeRadio) / 100;
    chart.horizontalMargin = (chart.width * chart.axeRadio) / 100;
    chart.axeColor = '#b1b1b1';
    chart.axeWidth = 0.75;

    //Label config
    chart.fontRadio = 3;
    chart.fontFamily = 'times';
    chart.fontStyle = 'normal';
    chart.fontWeight = '300';
    chart.fontColor = '#666';
    chart.verticalFontSize = (chart.height * chart.fontRadio) / 100;
    chart.horizontalFontSize = (chart.width * chart.fontRadio) / 100;

    //Guideline config
    chart.guidelineColor = '#e5e5e5';
    chart.guidelineWidth = 0.5;
}

BarChart.prototype.performPreOperations = function(){
    const chart = this;

    // Create canvas
    chart.createCanvas();


    // Get data
    chart.handleData();


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