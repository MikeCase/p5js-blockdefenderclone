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
        
    }

    show(){
        push();
        stroke(255,0,0,255);
        strokeWeight(5);
        line(this.laneStart, height-this.laneBottom, this.laneEnd, height-this.laneBottom);
        pop();
    }

    
    update(){
        
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
                        this.score.addScore();
                        this.score.setLevel();
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
                b.update(this.score.level);
                
                if (this.ammoBlock.length > 0){
                    b.hits(this.ammoBlock);
                }
                
                if (b.offscreen()){
                    console.log('Block offscreen, removed.');
                    this.blocks.splice(b, 1);
                    this.score.delScore(this.blocks);
                    // this.setLevel();
                }
            }
        }
        // this.setLevel();
        // this.showLevel();
        
    }

    dropBlock(){
        this.blocks.push(new Block(this.laneStart+15+100, -100, random(this.blockColors), this.score.level));
    }

    

    loadAmmoBlock(col){
        console.log('Loading ' + col + ' Ammo Block');
        this.ammoBlock.push(new AmmoBlock(this.laneStart+15, 500, col));
    }
}