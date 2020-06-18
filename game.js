class Game {
    constructor() {
   
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
        fill("white");
        noStroke(); 
        rect(600, 0, 300, 600);
        fill("rgb(100,164,143)")
        textFont('MuseoModerno');
        textSize(18);

        image(rewardImg, 630,3, 20, 20)
        text(`${game.score}`, 670, 20); 
        text(`highscore: ${game.highscore}`, 680, 40);
    } 
    
}