const game = new Game(); 
const player= new Player(); 
const reward= new Reward();
let startGame=false; 
let gameOver=false; 
 

function preload() {
    rewardImg=loadImage("pictures/breze.png");
    song=loadSound("pictures/bite.mp3")
}

function setup() {
    let canvas=createCanvas(WIDTH+200, HEIGHT);
    
}

function draw() {
    game.drawGrid();
    game.scoreboard();

    if (gameOver==true) {
        // fill("white"); 
        // rect(px, py, pWidth, pHeight);
        fill("white");
        textSize(30); 
        textAlign(CENTER);  
        text("press any key to try again", px, py, pWidth, pHeight); 
    } else {

    if (startGame==true) {
    frameRate(7); 
    
    player.drawSnake(); 
    reward.drawReward(); 

    if(player.eat(reward)){
        reward.setRandomBreze();  
        console.log(`got it, score ${game.score}`); 
        song.play();  
     } 
    } else {

        fill('hsb(160, 100%, 100%)'); 
        rect(240, 240, side, side);
        fill("white")
        textSize(50); 
        textAlign(CENTER); 
        text("press any key", px, py, pWidth, pHeight); 
    } 
  }
}

function keyPressed() {
    startGame=true; 
    gameOver=false; 
    console.log("game started"); 
    
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
