class AmmoBlock extends Block {
    constructor(x,y,col){
        super(x, y, col);
        this.pos = createVector(x, y);
        
        this.col = col;
        console.log(this.col == col);
    }

    loadAmmo(){

    }

    show(){
        push();
        fill(this.col);
        rect(this.pos.x, this.pos.y, this.width, this.height);
        pop();
    }

    update(){
        this.pos.add(createVector(0,-5));
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