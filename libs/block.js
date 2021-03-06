class Block {
    constructor(x, y, col){
        this.pos = createVector(x, y);
        this.width = 100;
        this.height = 75;
        this.col = col;
        this.lane_bottom = 495;
    }
    
    show() {
        push();
        fill(this.col);
        noStroke();
        rect(this.pos.x , this.pos.y - this.height, this.width, this.height);
        pop();
    }

    update(lvlSpd){
        this.pos.add(createVector(0,1*lvlSpd));

    }

    offscreen (){
        if(this.pos.y-this.height > this.lane_bottom){
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