class Game {
    constructor() {
        this.life=true; 
        this.score=0;
        this.highscore=0;  
    }
    preloadGame() {
       
    }
    drawGrid() {
        background("rgb(100,164,143)"); 
        for (let x = 0; x <= WIDTH; x += WIDTH / 20) {
            for (let y = 0; y < HEIGHT; y += HEIGHT/ 20) {
                stroke("rgb(100,164,143)");
                // strokeWeight(1); 
                line(x, 0, x, HEIGHT);
                line(0, y, WIDTH, y); 
    }
    }  
    }
    scoreboard() {
        // fill(255);
        // rect(0, 650, 650, 40);
        fill("white");
        textFont('MuseoModerno');
        textSize(18);
        text(`score: ${game.score}`, 10, 20); 
        text(`highscore: ${game.highscore}`, 10, 40);
    } 
    
}