class Lane {
    constructor(ls, le, col, score){
        this.laneStart = ls;
        this.laneEnd = le;
        this.col = col;
        this.laneBottom = 105;
        this.blocks = [];
        this.blockColors = [color(255, 0, 0), color(0, 255, 0), color(0, 0, 255)];
        this.ammoBlock = [];
        this.score = score;
        this.level = 1;
        
    }

    show(){
        push();
        stroke(255,0,0,255);
        strokeWeight(5);
        line(this.laneStart, height-this.laneBottom, this.laneEnd, height-this.laneBottom);
        pop();
    }

    update(){
        // if(frameCount % floor(random(400, 800)) === 0){
        //     this.dropBlock();
        // }
        if (millis() % floor(random(30,60)) == 0){
            console.log('Dropping a block');
            this.dropBlock();
        }

        if (this.ammoBlock.length > 0){
            for(let ab of this.ammoBlock){
                ab.show();
                ab.update();

                if (this.blocks.length > 0){
                    if (ab.hits(this.blocks)){
                        this.ammoBlock.splice(ab, 1);
                        score.addScore();
                    }
                }

                if (ab.offscreen()){
                    this.ammoBlock.splice(ab, 1);
                    console.log('offscreen ammo, removed');
                }
                
            }
        }
        
        if (this.blocks.length > 0){
            for (let b of this.blocks){
                b.show();
                b.update();

                if (this.ammoBlock.length > 0){
                    b.hits(this.ammoBlock);
                }

                if (b.offscreen()){
                    console.log('Block offscreen, removed.');
                    this.blocks.splice(b, 1);
                    this.score.delScore(this.blocks);
                }
            }
        }

        
        
    }

    dropBlock(){
        this.blocks.push(new Block(this.laneStart+15, -100, random(this.blockColors)));
    }

    setLevel(){
        if (this.score.getScore() % 5 == 0) {
            this.level += 1;   
        }
    }



    loadAmmoBlock(col){
        console.log('Loading ' + col + ' Ammo Block');
        this.ammoBlock.push(new AmmoBlock(this.laneStart+15, 500, col));
    }
}