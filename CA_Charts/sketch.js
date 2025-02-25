

// let R = "Rhed";
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
        cleanedDataP.push(dataP.rows[i].obj)
    }


    createCanvas(2400,2400);
    
    angleMode(DEGREES);

    charts.push(new BarChart({
        data:cleanedData,
        xVal:"Age_Group",
        yVal:"Male",
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
        numBars:cleanedData.length}))

    charts.push(new HorizontalChart({
        data:cleanedDataP,
        xVal:"Name",
        yVal:"HP",
        chartWidth:500,
        chartHeight:500,
        chartWeight:3,
        chartPosX:300,
        chartPosY:1500,
        barWidth:30,
        margin:30,
        fontSize:20,
        incrementNum:5,
        incrementWidth:10,
        numBars:11,
        titleSize:50,
        title:"Pokemon HP Stats"
    }))
}


function draw(){
    background(125,125,125);
    
    charts.forEach(row=>{row.renderBars();row.renderAxis();row.renderIncrements();row.renderLabels();row.renderIncLabels()})
    
}


