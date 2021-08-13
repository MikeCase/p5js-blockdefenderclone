class Score{
    constructor(){
        this.pos = createVector(15, 50);
        this.size = 32;
        this.col = 255;
        this.score = 0;
    }

    show() {
        push();
        fill(this.col);
        textSize(this.size);
        text("Score: " + this.score, this.pos.x, this.pos.y);
        pop();
    }

    addScore(){
        this.score += 1;
    }

    delScore(blocks){
        if (this.score > 0){
            this.score -= 1;
            return;
        }
        this.gameOver(blocks);
    }

    getScore() {
        return this.score;
    }

    gameOver(blocks){
        for (let b of blocks){
            blocks.splice(b,1);
        }
        push();
        fill(255);
        textSize(64);
        textAlign(CENTER);
        text('Game Over', width/2, height/2);
        pop();
        noLoop();
    }
}