

let R = ["hi","howdy"];
let cleanedData = [];
let cleanedDataP = [];


let charts=[];

function preload(){
    data = loadTable("data/combined.csv", "csv", "header")
    dataP = loadTable("data/Pokemon.csv", "csv", "header")
}


function setup(){
    for (let i = 0; i<data.rows.length;i++){
        cleanedData.push(data.rows[i].obj)
    }

    for (let i = 0; i<dataP.rows.length;i++){
        cleanedDataP.push(dataP.rows[i].obj)
    }

    createCanvas(2400,2400);
    
    angleMode(DEGREES);

    charts.push(new BarChart({
        data:cleanedDataP,
        xVal:"Name",
        yVal:"Attack",
        chartWidth:500,
        chartHeight:500,
        chartWeight:3,
        chartPosX:75,
        chartPosY:600,
        barWidth:20,
        margin:30,
        fontSize:20,
        incrementNum:5,
        incrementWidth:10,
        barWidth:30,
        margin:30,
        fontSize:30,
        incrementNum:5,
        incrementWidth:10,
        numBars:10,
        titleSize:50,
        title:"Pokemon Attack Stats"}))

    charts.push(new HorizontalChart({
        data:cleanedDataP,
        xVal:"Name",
        yVal:"HP",
        chartWidth:700,
        chartHeight:800,
        chartWeight:3,
        chartPosX:400,
        chartPosY:1800,
        barWidth:30,
        margin:30,
        fontSize:30,
        incrementNum:5,
        incrementWidth:10,
        numBars:11,
        titleSize:50,
        title:"Pokemon HP Stats"
    }))

    charts.push(new StackedChart({
        data:cleanedDataP,
        xVal:"Name",
        yVal:["HP","Attack","Speed"],
        chartWidth:500,
        chartHeight:500,
        chartWeight:3,
        chartPosX:1000,
        chartPosY:600,
        barWidth:30,
        margin:30,
        fontSize:30,
        incrementNum:5,
        incrementWidth:10,
        numBars:11,
        titleSize:50
    }))
}


function draw(){
    background(125,125,125);
    
    charts.forEach(row=>{row.renderBars();row.renderAxis();row.renderIncrements();row.renderLabels();row.renderIncLabels()})

    
    
}


