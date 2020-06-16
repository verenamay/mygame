const game = new Game(); 
const player= new Player(); 

let reward; 


function preload() {
    rewardImg=loadImage("pictures/breze.png"); 

}

function setup() {
    let canvas=createCanvas(WIDTH, HEIGHT); 
    

}

function draw() {
    clear(); 
    frameRate(7); 
    game.drawGrid();
    game.reward.drawReward(); 
    game.player.update(); 
    game.player.drawSnake(); 
}

function keyPressed() {
    if (keyCode===40) {
        game.player.moveDown(); 
        console.log("Moving down")
    }
    if (keyCode===38) {
        game.player.moveUp(); 
        console.log("Moving Up")
    }
    if (keyCode===37) {
        game.player.moveLeft(); 
        console.log("Moving Left")
    }
    if (keyCode===39) {
        game.player.moveRight(); 
        console.log("Moving Right")
    }
}

