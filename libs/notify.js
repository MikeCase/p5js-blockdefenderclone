class notify {
    constructor(msg){
        this.msg = msg;
        this.showTime;
        this.curTime;
    }

    showMsg(){
        this.showTime = millis();
        push();
        fill(255);
        textSize(32);
        text(this.msg, width/2, height/2);
        pop();
    }

}