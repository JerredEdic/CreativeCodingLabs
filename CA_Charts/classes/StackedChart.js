class StackedChart{
    constructor(obj){
        this.data = obj.data
        this.xVal = obj.xVal;
        this.yVal = obj.yVal;
        this.y1Val = obj.y1Val;
        this.y2Val = obj.y2Val;
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

        this.title = obj.title || "Default"
        this.titleSize = obj.titleSize || 30;

        this.axisColor = color(0,0,0);

        this.gap = (this.chartWidth - (this.numBars*this.barWidth)-(this.margin*2))/(this.numBars-1);
        

        this.barColor = color(125,200,30);
        this.fontSize = obj.fontSize;
        this.textCol = color(255,255,255);
        this.incrementNum = obj.incrementNum || 5;
        this.incrementWidth=obj.incrementWidth || 5;
        
        this.yArray=[]
        if (Array.isArray(this.yVal)==false && this.y1Val!=undefined && this.y2Val!=undefined)
        {
            this.yArray.push(this.data[this.yVal]);
            this.yArray.push(this.data[this.y1Val]);
            this.yArray.push(this.data[this.y2Val]);

            this.title =this.yVal+","+this.y1Val+","+this.y2Val +" Chart";
        }
        else if (this.y1Val!=undefined && this.y2Val!=undefined) {
            this.yVal.forEach(val => {this.yArray.push(this.data[val])});
            this.yArray.push(this.y1Val);
            this.yArray.push(this.y2Val);

            this.title =this.yVal+","+this.y1Val+","+this.y2Val +" Chart";
        }
        else if (this.y1Val!=undefined) {
            this.yVal.forEach(val => {this.yArray.push(val)});
            this.yArray.push(this.y1Val);

            this.title =this.yVal+","+this.y1Val+" Chart";
        }
        else if (this.y2Val!=undefined) {
            this.yVal.forEach(val => {this.yArray.push(val)});
            this.yArray.push(this.y2Val);

            this.title =this.yVal+","+this.y2Val +" Chart";
        }
        else {
            this.yVal.forEach(val => {this.yArray.push(val)});

            this.title =this.yVal+" Chart";
        }

        this.total = []
        for (let i=0;i<this.cleaner.length;i++){
            this.addUp = 0;
            
            for (let j=0;j<this.yArray.length;j++){
                this.addUp = this.addUp + parseInt(this.cleaner[i][this.yArray[j]])
            }
            this.total.push(this.addUp)
            this.addUp = 0;
        }

        this.scaler = this.chartHeight/(max(this.total));
    }

    renderBars(){
        push();
            translate(this.chartPosX,this.chartPosY);
            

            push();
                translate(this.margin,0);
                noStroke();
                        push()
                        // fill(this.barColor)
                        // for(let i=0; i<this.numBars;i++){
                        //     rect(((this.barWidth+this.gap)*i),0,this.barWidth,-parseInt(this.cleaner[i][this.yArray[1]])*this.scaler);
                        // }
                        this.colors=["Ffd700",""]
                        for(let i=0; i<this.numBars;i++){
                            
                            for (let j=0; j<this.yArray.length;j++){
                                fill(this.colors[j%2])
                                if(j>0){
                                    this.underBar = 0
                                    for (let k=0;k<j-1;k++){
                                        this.underBar = this.underBar + (parseInt(this.cleaner[i][this.yArray[k]])*this.scaler)
                                    }

                                    rect(((this.barWidth+this.gap)*i),-parseInt(this.cleaner[i][this.yArray[j-1]])*this.scaler,this.barWidth,-((parseInt(this.cleaner[i][this.yArray[j]])*this.scaler)+(this.underBar)));
                                }
                                else{
                                    rect(((this.barWidth+this.gap)*i),0,this.barWidth,-parseInt(this.cleaner[i][this.yArray[j]])*this.scaler);
                                }
                                
                            }
                        }
                pop() 
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
                textAlign(RIGHT,CENTER);
                textSize(this.fontSize);
                text(int(max(this.total)*(i/this.incrementNum)),-this.incrementWidth*2,-(i*(this.chartHeight/this.incrementNum)))
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
