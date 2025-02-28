class TornadoChart{
    constructor(obj){
        this.data = obj.data
        this.xVal = obj.xVal;
        this.yVal = obj.yVal;
        this.y1Val = obj.y1Val;
        this.chartPosX = obj.chartPosX;
        this.chartPosY = obj.chartPosY;
        this.chartWidth = obj.chartWidth || 30;
        this.chartHeight = obj.chartHeight ||400;
        this.barWidth = obj.barWidth ||30;
        this.margin = obj.margin ||30;
        this.chartWeight = obj.chartWeight || 3;

        this.numBars = obj.numBars || 5;
        this.startId = obj.start || 0;

        this.cutData = this.startId+this.numBars

        this.title = obj.title || this.yVal +" Chart";
        this.titleSize = obj.titleSize || 30;

        this.axisColor = obj.axisColor||color(0,0,0);

        this.gap = (this.chartHeight - (this.numBars*this.barWidth)-(this.margin*2))/(this.numBars-1);

        this.cleaner = []

        for (let i=this.startId;i<this.cutData;i++){
            this.cleaner.push(this.data[i])
        }

        

        this.barColors = obj.barColors||[color(125,200,30),"#Ffd700"];
        this.fontSize = obj.fontSize;
        this.textCol = obj.textCol||color(255,255,255);
        this.incrementNum = obj.incrementNum || 5;
        this.incrementWidth=obj.incrementWidth || 5;
        
        this.midPoint = this.chartWidth/2;

        this.yArray=[]
        if (Array.isArray(this.yVal)==false && this.y1Val!=undefined)
        {
            this.yArray.push(this.yVal);
            this.yArray.push(this.y1Val);

            if (this.title=="Default"){
            this.title =this.yVal+","+this.y1Val +" Tornado Chart";
            }
        }
        else if (Array.isArray(this.yVal)==false&&this.y1Val==undefined){
            this.yArray.push(this.yVal);
        }
        else if (this.y1Val!=undefined) {
            this.yVal.forEach(val => {this.yArray.push(val)});
            this.yArray.push(this.y1Val);


            if (this.title=="Default"){
            this.title =this.yVal+","+this.y1Val+" Chart";
            }
        }
        else {
            this.yVal.forEach(val => {this.yArray.push(val)});

            if (this.title=="Default"){
            this.title =this.yVal+" Chart";
            }
        }
        this.total=[]

        for (let i=0;i<this.yArray.length;i++){
            this.total = this.cleaner.map(row=>parseInt(row[this.yArray[i]]))
        }

        

        this.scaler = this.chartHeight/max((this.total));

        this.tempLog=[];
    }

    renderBars(){
        push();
            translate(this.chartPosX,this.chartPosY);
            

            push();
                translate(0,-this.margin);
                rotate(90)
                
                for(let i=0; i<this.numBars;i++){

                    if (this.yArray.length<3){
                        for(let j=0;j<this.yArray.length;j++){
                            noStroke();
                            fill(this.barColors[j%this.barColors.length])
                            if (j<1){
                                
                               rect(
                                -((this.barWidth+this.gap)*i),-this.midPoint,-this.barWidth,parseInt(this.cleaner[i][this.yArray[j]])*this.scaler/2
                                ); 
                            }
                            else{

                                rect(
                                    -((this.barWidth+this.gap)*i),
                                    -this.midPoint,
                                    -this.barWidth,
                                    -parseInt(this.cleaner[i][this.yArray[j]])*this.scaler/2
                                );
                            }
                        }
                    }
                    else {
                        this.title = "NOT VALID DATA"
                    }
                }
                        
            pop();

        pop();
    }

    renderAxis(){
        push();
            translate(this.chartPosX,this.chartPosY);
            stroke(this.axisColor);
            strokeWeight(this.chartWeight);
            line(0,0,this.chartWidth,0);
            line(0,0,0,-this.chartHeight);
            
            line(this.midPoint,0,this.midPoint,-this.chartHeight)

            textSize(this.titleSize);
            fill(this.textCol);
            stroke(this.titleSize/3);
            textAlign(CENTER);
            text(this.title, this.chartWidth/2,-(this.chartHeight+this.gap))
        pop();
    }

    renderIncrements(){
        push();
            translate(this.chartPosX+this.midPoint,this.chartPosY);
            stroke(this.axisColor);
            strokeWeight(this.chartWeight);

            for(let i=0;i<=this.incrementNum;i++){
                push();
                rotate(90);
                line(-this.incrementWidth,-(1+(i*(this.midPoint/this.incrementNum))),this.incrementWidth,-(1+(i*(this.midPoint/this.incrementNum))))
                pop();

                push();
                rotate(90);
                line(-this.incrementWidth,i*(this.midPoint/this.incrementNum)-1,this.incrementWidth,i*(this.midPoint/this.incrementNum)-1)
                pop();
            }
        pop();
    }

    renderIncLabels(){
        push();
            translate(this.chartPosX+this.midPoint,this.chartPosY);
            stroke(this.axisColor);
            strokeWeight(this.chartWeight);

            for(let i=0;i<=this.incrementNum;i++){
                push();
                    textSize(this.fontSize);
                    fill(this.textCol);
                    stroke(this.fontSize/3);
                    translate((i*(this.midPoint/this.incrementNum)),this.incrementWidth*3)
                    rotate(45)
                    textAlign(LEFT,CENTER);
                    textSize(this.fontSize);
                    text((max(this.cleaner.map(row => row[this.yVal]))*(i/this.incrementNum)),0,0);
                pop();

                push();
                    textSize(this.fontSize);
                    fill(this.textCol);
                    stroke(this.fontSize/3);
                    translate(-((i*(this.midPoint/this.incrementNum))),this.incrementWidth*3)
                    rotate(45)
                    textAlign(LEFT,CENTER);
                    textSize(this.fontSize);
                    text((max(this.cleaner.map(row => row[this.yVal]))*(i/this.incrementNum)),0,0);
                pop();
            }
        pop();
    }

    renderLabels(){
        push();
            translate(this.chartPosX,this.chartPosY);
            stroke(this.axisColor);
            strokeWeight(this.chartWeight);
            

            push();
                translate(-(this.margin/3),-(this.margin+this.barWidth));

                for(let i=0;i<this.numBars;i++){
                    noStroke();
                    textAlign(RIGHT,TOP);
                    textSize(this.fontSize);
                    fill(this.textCol);
                    stroke(this.barWidth/2);
                    text(this.cleaner[i][this.xVal],0,-(this.gap+this.barWidth)*i)
                }
            pop();

        pop();
    }
}
