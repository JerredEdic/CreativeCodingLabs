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
        this.axisColor = color(0,0,0);

        this.gap = (this.chartWidth - (this.data.length*this.barWidth)-(this.margin*2))/(this.data.length-1);
        this.scaler = this.chartHeight/(max(this.data.map(row => row[this.yVal])));

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
                translate(this.margin,0);
                
                for(let i=0; i<this.data.length;i++){
                        noStroke();
                        push()
                        fill(this.barColor)
                        rect(((this.barWidth+this.gap)*i),0,this.barWidth,-this.data[i][this.yVal]*this.scaler)
                        textSize(this.fontSize);
                        fill(this.textCol);
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
        pop();
    }

    renderIncrements(){
        push();
            translate(this.chartPosX,this.chartPosY);
            stroke(this.axisColor);
            strokeWeight(this.chartWeight);

            for(let i=0;i<=this.incrementNum;i++){
                line(-this.incrementWidth,-(i*(this.chartHeight/this.incrementNum)),this.incrementWidth,-(i*(this.chartHeight/this.incrementNum)))
            }
        pop();
    }

    renderIncLabels(){
        push();
            translate(this.chartPosX,this.chartPosY);
            stroke(this.axisColor);
            strokeWeight(this.chartWeight);

            for(let i=0;i<=this.incrementNum;i++){
                line(-this.incrementWidth,-(i*(this.chartHeight/this.incrementNum)),this.incrementWidth,-(i*(this.chartHeight/this.incrementNum)))
                noStroke();
                textSize(this.fontSize);
                text(i,-this.incrementWidth*(this.scaler*2),-(i*(this.chartHeight/this.incrementNum)))
            }
        pop();
    }

    renderLabels(){
        push();
            translate(this.chartPosX,this.chartPosY);
            stroke(this.axisColor);
            strokeWeight(this.chartWeight);
            line(0,0,this.chartWidth,0);
            line(0,0,0,-this.chartHeight);
            

            push();
                translate(this.margin,0);
                
                for(let i=0; i<this.data.length;i++){
                    if(this.data[i][this.yVal]>0){
                        noStroke();
                        push()
                        textSize(this.fontSize);
                        fill(this.textCol);

                            push();
                                stroke(this.barWidth/2);
                                translate(((this.barWidth+this.gap)*i),20)
                                rotate(45)
                                text(this.data[i][this.xVal],0,0)
                            pop();
                        pop()
                    }
                }
            pop();

        pop();
    }
}
