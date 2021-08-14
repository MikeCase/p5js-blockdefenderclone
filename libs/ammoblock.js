class AmmoBlock extends Block {
    constructor(x,y,col){
        super(x, y, col);
        // this.pos = createVector(x, y);
        this.body = Bodies.rectangle(x,y,this.width, this.height);
        Composite.add(engine.world, this.body);
        this.col = col;
        console.log(this.col == col);
        this.pos = this.body.position;
    }

    show(){
        const angle = this.body.angle;
        push();
        translate(this.pos.x, this.pos.y)
        fill(this.col);
        rotate(angle);
        rect(0, 0, this.width, this.height);
        pop();
        this.fire(this.pos.x, this.pos.y);
    }

    update(){

    }


    fire(x,y){
        let pos = createVector(x, y);
        let force = createVector(0, -0.1);
        Matter.Body.applyForce(this.body, pos, force)
    }

    offscreen() {
        if (this.pos.y+this.height < 0){
            return true;
        }
    }

    hits(blocks){
        for (let b of blocks){
            if (this.pos.y < b.pos.y){
                if (this.col.toString() == b.col.toString()){
                    // console.log("It's a christmas mirical!.");
                    blocks.splice(b, 1);
                    console.log('ammo removing block');
                    return true;
                }
            }
        }
    }
}