class Player {
    constructor(x, y) {
        this.x= 200;                    //starting position
        this.y= 200;                    // starting position
        // this.position= [100, 100];         // first idea, work with array
        this.size= 10; 
        this.status= "alive"; 
        this.score=0; 
    }
    drawSnake() {
        fill('hsb(160, 100%, 100%)'); 
        rect(this.x, this.y, side, side); 
    }
}

