class HorizontalChart{
    constructor(obj){
        this.data = obj.data
        this.xVal = obj.xVal;
        this.yVal = obj.yVal;
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

        this.axisColor = color(0,0,0);

        this.gap = (this.chartHeight - (this.numBars*this.barWidth)-(this.margin*2))/(this.numBars-1);

        this.cleaner = []

        for (let i=this.startId;i<this.cutData;i++){
            this.cleaner.push(this.data[i])
        }

        this.scaler = this.chartWidth/(max(this.cleaner.map(row => row[this.yVal])));

        this.barColor = color(125,200,30);
        this.fontSize = obj.fontSize;
        this.textCol = color(255,255,255);
        this.incrementNum = obj.incrementNum || 5;
        this.incrementWidth=obj.incrementWidth || 5;
    }

    renderBars(){
        push();
            translate(this.chartPosX,this.chartPosY);
            

            push();
                translate(0,-this.margin);
                rotate(90)
                
                for(let i=0; i<this.numBars;i++){
                        noStroke();
                        push()
                            fill(this.barColor)
                            rect(-((this.barWidth+this.gap)*i),0,-this.barWidth,-this.cleaner[i][this.yVal]*this.scaler)
                        pop()                    
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

            textSize(this.titleSize);
            fill(this.textCol);
            stroke(this.titleSize/3);
            textAlign(CENTER);
            text(this.title, this.chartWidth/2,-(this.chartHeight+this.gap))
        pop();
    }

    renderIncrements(){
        push();
            translate(this.chartPosX,this.chartPosY);
            stroke(this.axisColor);
            strokeWeight(this.chartWeight);

            for(let i=0;i<=this.incrementNum;i++){
                push();
                rotate(90);
                line(-this.incrementWidth,-(1+(i*(this.chartWidth/this.incrementNum))),this.incrementWidth,-(1+(i*(this.chartWidth/this.incrementNum))))
                pop();
            }
        pop();
    }

    renderIncLabels(){
        push();
            translate(this.chartPosX,this.chartPosY);
            stroke(this.axisColor);
            strokeWeight(this.chartWeight);

            for(let i=0;i<=this.incrementNum;i++){
                push();
                    textSize(this.fontSize);
                    fill(this.textCol);
                    stroke(this.barWidth/2);
                    translate((i*(this.chartWidth/this.incrementNum))-5,this.incrementWidth*3)
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
