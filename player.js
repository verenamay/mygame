class Player {
    constructor() {               
        this.x= 300;                    //starting position
        this.y= 300;                    // starting position
        this.cor=[];                    // coordinates is where the snake is going
        this.size=0;                   // size of snake 
        this.score=0; 
        this.xdir=1;                         //horizontal velocity, at start
        this.ydir=0;                          // vertical velocity, at start
    }
    dir(x,y) {
        this.xdir=x; 
        this.ydir=y; 
    }
    letGrow(pos) {                                     // happens when eats food
        let d= dist(this.x, this.y, pos.x, pos.y); 
        console.log(d); 
        if (d<1) {
            this.size++; 
            return true; 
        } 
        console.log("should grow now")
    }
    update() {
        for (let i=0; i<this.cor.length-1; i++) {
            this.cor[i]=this.cor[i+1]; 
        }
        if (this.size>=1) {
            this.cor[this.size-1] = createVector(this.x, this.y); 
        }
        this.x= this.x+this.xdir*side;  
        this.y= this.y+this.ydir*side; 

        this.x=constrain(this.x, 0, HEIGHT-side); 
        this.y=constrain(this.y, 0, WIDTH-side)
    }
    

    moveDown() {
        this.dir(0,SNAKESPEED); 
    }
    moveUp() {
        this.dir(0,-SNAKESPEED); 
    }
    moveLeft() {
        this.dir(-SNAKESPEED,0)
}
    moveRight() {
        this.dir(SNAKESPEED,0)
    }
    playerScore() {
        this.score+=100; 
        game.reward.setRandomBreze(); 
        game.reward.drawReward(); 
        // this.letGrow(); 
        console.log(this.score); 
    }
    drawSnake() {
        fill('hsb(160, 100%, 100%)'); 
        rect(this.x, this.y, side, side);                 //here I can actually see the snake
        if(this.x===game.reward.x && this.y===game.reward.y) {
            this.playerScore(); 
            console.log("got it")
        }
        
    }
    dead() {
        
    }
}

