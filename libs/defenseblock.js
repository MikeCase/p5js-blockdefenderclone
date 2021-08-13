class DefenseBlock{
    constructor(){
        const RED = color(255, 0,0);
        const GREEN = color(0,255,0);
        const BLUE = color(0, 0, 255);

        this.buttons = [
            new Block(15, height - 15, RED),
            new Block((width / 2) - 53, height - 15, GREEN),
            new Block(width - 118, height - 15, BLUE)
        ];
        
        this.ammoColor;

    }

    show(){
        push();
        noStroke();
        fill(0);
        rect(0, height-105, width, height);
        for (let b of this.buttons){
            b.show();
        }
        pop();
    }

    clicked(){
        for (let b of this.buttons){
            // let d = dist(mouseX, mouseY, b.pos.x, b.pos.y);
            if (mouseX < b.pos.x+(b.width) && mouseX > b.pos.x && mouseY > b.pos.y-b.height && mouseY < b.pos.y){
                console.log("Clicked on the " + b.col + " button");
                this.ammoColor = b.col;
            }
        }
    }

    reset_ammo_color(){
        this.ammoColor = false;
    }
}