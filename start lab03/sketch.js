let R = "Rhed";
let cleanedData = [];
let femaleScores = [];
let ageGroups =[];
let maleAges = [];

function preload(){
    data = loadTable("data/combined.csv", "csv", "header")
}


function setup(){
    for (let i = 0; i<data.rows.length;i++){
        cleanedData.push(data.rows[i].obj)
    }


    for (let i = 0; i<cleanedData.length;i++){
        cleanedData[i].Female = parseInt(cleanedData[i].Female)
        cleanedData[i].Male = parseInt(cleanedData[i].Male)
        cleanedData[i].Total = parseInt(cleanedData[i].Total)
    }
    for (let i = 0; i<cleanedData.length;i++){
        
        maleAges.push(cleanedData[i].Male)
    }


    createCanvas(800,800);
    
    angleMode(DEGREES);
    noLoop();
    rectMode(CENTER);
}
    

function draw(){
    // console.log("HI")
    // console.log(sin(45))
    // console.log(R)
    background(125,125,125);

    push();
    fill(255,0,0);
    translate(300,300);
    rotate(-45);
    rect(0,0,200,200);
    pop();

    push();
    fill(0,255,0);
    translate(150,150);
    rotate(30);
    rect(0,0,100,100);
    pop();


    
    // cleanedData.forEach(
    //     row => femaleScores.push(row.Female)
    // );

    femaleScores = cleanedData.map(row => row.Female);
    ageGroups = cleanedData.map(row => row.Age_Group);


    console.log(ageGroups)

}

function cleanData(){
}
