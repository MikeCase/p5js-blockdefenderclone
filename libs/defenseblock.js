class DefenseBlock extends Block{
    constructor(x,y,col){
        super(x,y,col);
        // const RED = color(255, 0,0);
        // const GREEN = color(0,255,0);
        // const BLUE = color(0, 0, 255);
        this.body.isStatic = true;
        
        // this.buttons = [
        //     new Block(15, height - 15, RED),
        //     new Block((width / 2) - 53, height - 15, GREEN),
        //     new Block(width - 118, height - 15, BLUE)
        // ];
        
        this.ammoColor;
        
    }

    redButton(){
        push();
        translate(15+this.width/2, height-(this.height/2+15));
        const RED = color(255, 0,0);

        fill(RED);
        rectMode(CENTER);

        rect(0, 0, this.width, this.height);
        pop();

    }

    greenButton(){
        push();
        translate((width / 2) - 53+ (this.width/2), height - (this.height/2+15));
        const GREEN = color(0,255,0);

        fill(GREEN);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
        
    }

    blueButton(){
        push();
        translate(width - 118 + (this.width/2), height -(this.height/2+15));
        const BLUE = color(0, 0, 255);

        fill(BLUE);
        rectMode(CENTER);

        rect(0, 0, this.width, this.height);
        pop();
        
    }

    show(){
        push();
        noStroke();
        fill(0);
        rect(0, height-105, width, height);
        this.redButton();
        this.greenButton();
        this.blueButton();
        pop();
    }

    update(){
        
    }

    clicked(col){
        console.log("Clicked on the " + col + " button");
        this.ammoColor = col;
    }

    reset_ammo_color(){
        this.ammoColor;
    }
}