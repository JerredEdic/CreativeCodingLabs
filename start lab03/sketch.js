

// let R = "Rhed";
let cleanedData = [];

// let femaleScores = [];
// let ageGroups =[];
// let maleAges = [];

// let chartPosX = 100;
// let chartPosY = 600;
// let chartWidth=500;
// let chartHeight=500;
// let barWidth=10;
// let margin=15;
// let chartWeight=3;
// let axisColor;
// let gap;
// let scaler;
// let barColor;
// let fontSize;
// let textCol;
let charts=[];

let myFriends = [];
myFriends.push(new Friend("Timmy",21,"Skiing"));
myFriends.push(new Friend("Billy",18,"Bowling"));

function preload(){
    data = loadTable("data/combined.csv", "csv", "header")
}


function setup(){
    for (let i = 0; i<data.rows.length;i++){
        cleanedData.push(data.rows[i].obj)
    }


    // for (let i = 0; i<cleanedData.length;i++){
    //     cleanedData[i].Female = parseInt(cleanedData[i].Female)
    //     cleanedData[i].Male = parseInt(cleanedData[i].Male)
    //     cleanedData[i].Total = parseInt(cleanedData[i].Total)
    // }
    // for (let i = 0; i<cleanedData.length;i++){
        
    //     maleAges.push(cleanedData[i].Male)
    // }
    // femaleScores = cleanedData.map(row => row.Female);
    // ageGroups = cleanedData.map(row => row.Age_Group);

    createCanvas(2400,2400);
    
    angleMode(DEGREES);
    // noLoop();

    // axisColor = color(0,0,0);
    // fontSize=barWidth;
    // barColor = color(125,200,30);
    // textCol=color(255,255,255)

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
        incrementWidth:10}))

    // charts.push(new BarChart(cleanedData,"Age_Group","Male",1000,750,5,700,1000,30,10,25,10,30))
}


function draw(){

    // console.log("HI")
    // console.log(sin(45))
    // console.log(R)
    background(125,125,125);

    // push();
    // translate(charts[0].chartPosX,charts[0].chartPosY);
    // stroke(charts[0].axisColor);
    // strokeWeight(charts[0].chartWeight);
    // line(0,0,charts[0].chartWidth,0);
    // line(0,0,0,-charts[0].chartHeight);

    // push();
    // translate(charts[0].margin,0);
    
    // for(let i=0; i<charts[0].data.length;i++){
    //     if(charts[0].data[i]>0){
    //         noStroke();
    //         push()
    //         fill(charts[0].barColor)
    //         rect(((charts[0].barWidth+charts[0].gap)*i),0,charts[0].barWidth,-charts[0].data[i][charts[0].yVal]*charts[0].scaler)
    //         textSize(charts[0].fontSize);
    //         fill(charts[0].textCol);

    //         push();
    //         // rotate(90)
    //         // textAlign(LEFT,BOTTOM)
    //         // text(ageGroups[i],20,-((barWidth+gap)*i))
    //         stroke(charts[0].barWidth/2);
    //         translate(((charts[0].barWidth+charts[0].gap)*i),20)
    //         rotate(45)
    //         text(ageGroups[i],0,0)
    //         pop();

    //         translate(charts[0].chartPosX,charts[0].chartPosY);
    //         translate(charts[0].margin,0);
    //         pop()
    //     }
    // }
    // pop();

    // pop();

    
    charts.forEach(row=>{row.renderBars();row.renderAxis();row.renderIncrements();row.renderLabels();row.renderIncLabels()})
    
}


