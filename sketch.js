
// let block;
let dfBlock;
let laneA = 0+15+100+15;
let laneB = 130+15+100+15;
let laneC = 260+15+100+15;
let lanes = [];
let score;
// let world, engine;

function setup(){
    // engine = Matter.Engine.create();
    // world = engine.world;
    const RED = color(255, 0,0);
    const GREEN = color(0,255,0);
    const BLUE = color(0, 0, 255);
    score = new Score();
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
    // Matter.Engine.update(engine);
    for(l of lanes){
        l.update();
        l.show();
    }
    score.show();
    score.showLevel();
    dfBlock.show();
    fill(255);
    textSize(24);
    text(mouseX + ", " + mouseY, mouseX, mouseY-10);

    
}

function mousePressed(){
        if (mouseX > 15 && mouseX < 15+100 && mouseY > 510 && mouseY < height - 15){
            dfBlock.clicked(color(255,0,0));
            // console.log('Clicked the red button');
        } else if (mouseX > 149 && mouseX < 149+100 && mouseY > 510 && mouseY < height - 15){
            dfBlock.clicked(color(0,255,0));
            // console.log('Clicked the green button');
        } else if (mouseX > 281 && mouseX < 281+100 && mouseY > 510 && mouseY < height - 15){
            dfBlock.clicked(color(0,0,255));
            // console.log('Clicked the blue button');
        }
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