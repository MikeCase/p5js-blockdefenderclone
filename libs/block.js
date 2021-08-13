class Block {
    constructor(x, y, col){
        this.pos = createVector(x, y);
        this.width = 100;
        this.height = 75;
        this.col = col;
        // this.body = Matter.Bodies.rectangle(x, y, this.width, this.height);
        // Matter.World.add(world, this.body);
    }
    
    show() {
        // const pos = this.body.position;
        // const angle = this.body.angle;
        push();
        translate(this.pos.x, this.pos.y);
        // rotate(angle);
        fill(this.col);
        noStroke();
        rectMode(CENTER);
        rect(0-(this.width/2) , 0 - (this.height/2), this.width, this.height);
        pop();
    }

    update(lvlSpd){
        this.pos.add(createVector(0,1*lvlSpd));

    }

    offscreen (){
        if(this.pos.y-this.height > 495){
            return true;
        }
    }

    hits(ammoBlocks){
        for (let ab of ammoBlocks){
            if (this.pos.y > ab.pos.y+ab.height){
                ammoBlocks.splice(ab, 1);
                console.log('block removing ammo');
            }
        }
    }
}