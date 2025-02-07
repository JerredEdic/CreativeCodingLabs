class BarChart{
    constructor(_data,_xVal,_yVal,_chartWidth,_chartHeight,_chartWeight,_chartPosX,_chartPosY,_barWidth,_margin,_fontSize,_incrementNum,_incrementWidth){
        this.data = _data
        this.chartPosX = _chartPosX;
        this.xVal = _xVal
        this.yVal = _yVal
        this.chartPosY = _chartPosY;
        this.chartWidth = _chartWidth;
        this.chartHeight = _chartHeight;
        this.barWidth = _barWidth;
        this.margin = _margin;
        this.chartWeight = _chartWeight;
        this.axisColor = color(0,0,0);

        this.gap = (this.chartWidth - (this.data.length*this.barWidth)-(this.margin*2))/(this.data.length-1);
        this.scaler = this.chartHeight/(max(this.data.map(row => row[this.yVal])));

        this.barColor = color(125,200,30);
        this.fontSize = _fontSize;
        this.textCol = color(255,255,255);
        this.incrementNum = _incrementNum;
        this.incrementWidth=_incrementWidth;
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
