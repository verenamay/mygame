const game = new Game(); 

let reward; 


function preload() {
    rewardImg=loadImage("pictures/apple.png"); 

}

function setup() {
    let canvas=createCanvas(WIDTH, HEIGHT); 

}

function draw() {
    clear(); 
    game.drawGrid();
    // game.reward.setRandomApple(); 
    game.reward.drawReward(); 
    game.player.drawSnake(); 
}

function keyPressed() {
    
}