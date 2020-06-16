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
                stroke('hsb(160, 100%, 50%)');
                line(x, 0, x, this.height);
                line(0, y, this.width, y); 
    }
    }  
    } 
    
}