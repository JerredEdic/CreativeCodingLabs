class BarChart{
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
        
        this.cleaner = []

        for (let i=this.startId;i<this.cutData;i++){
            this.cleaner.push(this.data[i])
        }

        this.title = obj.title || this.yVal +" Chart";
        this.titleSize = obj.titleSize || 30;

        
        this.title = obj.title || this.yVal +" Chart";
        this.titleSize = obj.titleSize || 30;

        this.axisColor = obj.axisColor||color(0,0,0);

        this.gap = (this.chartWidth - (this.numBars*this.barWidth)-(this.margin*2))/(this.numBars-1);
        this.scaler = this.chartHeight/(max(this.cleaner.map(row => row[this.yVal])));

        this.barColors = obj.barColors||[color(125,200,30)];
        this.fontSize = obj.fontSize;
        this.textCol = obj.textCol||color(255,255,255);
        this.incrementNum = obj.incrementNum || 5;
        this.incrementWidth=obj.incrementWidth || 5;
        this.incColor = obj.incColor||color(0,0,0);
    }

    renderBars(){
        push();
            translate(this.chartPosX,this.chartPosY);
            

            push();
                translate(this.margin,0);
                
                for(let i=0; i<this.numBars;i++){
                        noStroke();
                        push()
                        fill(this.barColors[i%this.barColors.length])
                        rect(((this.barWidth+this.gap)*i),0,this.barWidth,-this.cleaner[i][this.yVal]*this.scaler)
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
            text(this.title, this.chartWidth/3,-(this.chartHeight+this.gap))
        pop();
    }

    renderIncrements(){
        push();
            translate(this.chartPosX,this.chartPosY);
            stroke(this.incColor);
            strokeWeight(this.chartWeight);

            for(let i=0;i<=this.incrementNum;i++){
                
                line(-this.incrementWidth,-(i*(this.chartHeight/this.incrementNum)),this.incrementWidth,-(i*(this.chartHeight/this.incrementNum)))
            }
        pop();
    }

    renderIncLabels(){
        push();
            translate(this.chartPosX,this.chartPosY);
            for(let i=0;i<=this.incrementNum;i++){
                textAlign(RIGHT,CENTER);
                textSize(this.fontSize);
                stroke(this.fontSize/3);
                fill(this.textCol);
                text((max(this.cleaner.map(row => row[this.yVal]))*(i/this.incrementNum)),-this.incrementWidth*2,-(i*(this.chartHeight/this.incrementNum)))
            }
        pop();
    }

    renderLabels(){
        push();
            translate(this.chartPosX,this.chartPosY);
            

            push();
                translate(this.margin,0);
                
                for(let i=0; i<this.numBars;i++){
                    noStroke();
                    push()
                    textSize(this.fontSize);
                    fill(this.textCol);

                        push();
                            stroke(this.barWidth/2);
                            translate(((this.barWidth+this.gap)*i),20)
                            rotate(45)
                            text(this.cleaner[i][this.xVal],0,0)
                        pop();
                    pop()
                }
            pop();

        pop();
    }
}
