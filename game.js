class Game {
    constructor() {
        this.player=new Player(); 
        this.reward= new Reward(); 
        this.height= HEIGHT; 
        this.width= WIDTH; 
    }
    preloadGame() {
       
    }
    drawGrid() {
        background("rgb(100,164,143)"); 
        for (let x = 0; x <= this.width; x += this.width / 30) {
            for (let y = 0; y < this.height; y += this.height / 30) {
                stroke("rgb(100,164,143)");
                line(x, 0, x, this.height);
                line(0, y, this.width, y); 
    }
    }  
    }
    scoreboard() {
        // fill(255);
        // rect(0, 650, 650, 40);
        fill("white");
        textFont('MuseoModerno');
        textSize(18);
        text("score:", 10, 20)
    } 
    
}