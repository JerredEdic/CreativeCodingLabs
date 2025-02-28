

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
        chartPosX:200,
        chartPosY:600,
        barWidth:20,
        margin:30,
        incrementWidth:10,
        barWidth:30,
        margin:30,
        fontSize:30,
        incrementNum:9,
        incrementWidth:10,
        numBars:10,
        titleSize:50,
        axisColor:"#00008b",
        barColors:["#E6e6fa","#40E0D0"],
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
        numBars:13,
        titleSize:50,
        title:"Pokemon HP Stats"
    }))

    charts.push(new StackedChart({
        data:cleanedDataP,
        xVal:"Name",
        yVal:["Speed","Defense"],
        y1Val:"Attack",
        y2Val:"HP",
        chartWidth:700,
        chartHeight:550,
        chartWeight:3,
        chartPosX:1100,
        chartPosY:700,
        barWidth:70,
        margin:30,
        fontSize:30,
        incrementNum:12,
        incrementWidth:10,
        numBars:6,
        titleSize:50,
        title:"The Chart",
        incColor:"#00008b",
        barColors:["#Ffd700","#880808","#40E0D0"],
        start:24
    }))

    charts.push(new TornadoChart({
        data:cleanedDataP,
        xVal:"Name",
        yVal:"HP",
        y1Val:"Speed",
        chartWidth:600,
        chartHeight:600,
        chartWeight:3,
        chartPosX:1500,
        chartPosY:1800,
        barWidth:30,
        margin:30,
        fontSize:30,
        incrementNum:6,
        incrementWidth:10,
        numBars:8,
        titleSize:50,
        title:"HP to Speed comparison",
        start:100
    }))
}


function draw(){
    background(125,125,125);
    
    charts.forEach(row=>{row.renderBars();row.renderAxis();row.renderIncrements();row.renderLabels();row.renderIncLabels()})

    
    
}


