const game = new Game(); 
const player= new Player(); 
const reward= new Reward();


function preload() {
    rewardImg=loadImage("pictures/breze.png");
    // snakeImg=loadImage("pictures/snake-head.png")
}

function setup() {
    let canvas=createCanvas(WIDTH, HEIGHT);
}

function draw() {
    frameRate(5); 

    game.drawGrid();
    game.scoreboard();

    player.drawSnake(); 
    reward.drawReward(); 

    if(player.eat(reward)){
        reward.setRandomBreze();  
        console.log(`got it, score ${game.score}`); 
        console.log(player.tail); 
    }

}

function keyPressed() {
    if (keyCode===40) {
        player.moveDown(); 
        console.log("Moving Down")
    }
    if (keyCode===38) {
        player.moveUp(); 
        console.log("Moving Up")
    }
    if (keyCode===37) {
        player.moveLeft(); 
        console.log("Moving Left")
    }
    if (keyCode===39) {
        player.moveRight(); 
        console.log("Moving Right")
    }
}
