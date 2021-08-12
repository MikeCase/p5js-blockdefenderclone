
// let block;
let dfBlock;
let laneA = 0+15+100+15;
let laneB = 130+15+100+15;
let laneC = 260+15+100+15;
let lanes = [];
let score;

function setup(){
    score = new Score();
    const RED = color(255, 0,0);
    const GREEN = color(0,255,0);
    const BLUE = color(0, 0, 255);
    createCanvas(400,600);
    dfBlock = new DefenseBlock(score);
    let laneAStart = 0;
    let laneAEnd = laneA+2;
    let laneBStart = laneA+2;
    let laneBEnd = laneB+8;
    let laneCStart = laneB+8;
    let laneCEnd = laneC+10;
    lanes.push(new Lane(laneAStart, laneAEnd, RED, score));
    lanes.push(new Lane(laneBStart, laneBEnd, GREEN, score));
    lanes.push(new Lane(laneCStart, laneCEnd, BLUE, score));

}

function draw(){
    background(0);
    for(l of lanes){
        l.update();
        l.show();
    }
    score.show();
    dfBlock.show();
    // fill(255);
    // textSize(24);
    // text(mouseX + ", " + mouseY, mouseX, mouseY-10);

    
}

function mousePressed(){
    dfBlock.clicked();
    for (let l of lanes){
        if (mouseX > l.laneStart && mouseX < l.laneEnd && mouseY < 495){
            if (!dfBlock.ammoColor){
                console.log('Please choose a red, green or blue block');
                return;
            }
            l.loadAmmoBlock(dfBlock.ammoColor);
            dfBlock.ammoColor = false;
        }
    }
}