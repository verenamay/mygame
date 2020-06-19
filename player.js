class Player {
    constructor() {
        this.x=240; 
        this.y=240; 
        this.xdir=1; 
        this.ydir=0; 
        this.tail=[this]; 
        this.total=0; 
    }
    eat(position) {
        let d= dist(this.x, this.y, position.x, position.y); 
        if (d<1) {
        this.tail.push(this);       
        game.score+=1; 
        return true; 
        }
        if (game.score>=game.highscore) {
            game.highscore=game.score; 
        }       
    }

    update(){
        this.x= this.x+this.xdir*side;  
        this.y= this.y+this.ydir*side; 

        this.x=constrain(this.x, 0, HEIGHT-side); 
        this.y=constrain(this.y, 0, WIDTH-side)
    }



    drawSnake() {
        fill('hsb(160, 100%, 100%)');    
        stroke("black")                        // make snake colorful
        strokeWeight(0.5);                                                  // no border for the snake
        rect(this.x, this.y, side, side);                       //here I can actually see the snake
        for (let i = 0; i < this.tail.length - 1; i++) {
            this.tail[i] = this.tail[i + 1];
            } 
        if(this.tail.length){
            this.tail[this.tail.length - 1] = {...this}
          }  
        
        this.update(this); 
        this.tail.forEach((elem,index)=>{
            rect(elem.x, elem.y, side, side);
            this.tail.find((item,ind) => {
              if(item.x === elem.x && item.y == elem.y && index !== ind) {
                console.log("dead");
                gameOver=true;
                this.tail.length=1; 
                game.score=0; 
                textSize(150);
                text("upsi", 300, 500); 
                return;
              }
            })
          })
    }

    dir(x,y) {
        this.xdir=x; 
        this.ydir=y; 
    }
    moveDown() {
        this.dir(0,SNAKESPEED); 
    }
    moveUp() {
        this.dir(0,-SNAKESPEED); 
    }
    moveLeft() {
        this.dir(-SNAKESPEED,0); 
    }
    moveRight() {
        this.dir(SNAKESPEED,0); 
    }
}