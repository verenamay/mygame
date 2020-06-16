class Player {
  constructor() {
    this.x = 300; //starting position
    this.y = 300; // starting position
    this.cor = []; // coordinates is where the snake is going
    this.size = 0; // size of snake
    this.score = 0;
    this.xdir = 1; //horizontal velocity, at start
    this.ydir = 0; // vertical velocity, at start
  }
  update() {
    // for (let i=0; i<this.cor.length-1; i++) {
    //     this.cor[i]=this.cor[i+1];
    // }
    // if (this.size>=1) {
    //     this.cor[this.size-1] = createVector(this.x, this.y);
    // }
    this.x = this.x + this.xdir * side;
    this.y = this.y + this.ydir * side;
    console.log(this.x);
  }
  // letGrow() {
  //     let d= dist(this.x, this.y, pos.x, pos.y);
  //     if (d<1) {
  //         this.size++;
  //         return true;
  //     } else {
  //         return false;
  //     }

  // console.log("should grow now")
  // }
  dir(x, y) {
    this.xdir = x;
    this.ydir = y;
  }
  moveDown() {
    this.dir(0, SNAKESPEED);
    // if (this.y===HEIGHT-side) {
    //     this.y-=side;
    //     console.log("you lost")
    //     this.score= -1;
    // }
  }
  moveUp() {
    this.dir(0, -SNAKESPEED);
    if (this.y > HEIGHT - side) {
      // this.y+=side;
      console.log("you lost");
      this.score = -1;
    }
  }
  moveLeft() {
    this.dir(-SNAKESPEED, 0);
    //     if (this.xdir<0) {
    //         this.xdir+=side;
    //         console.log("you lost")
    //         this.score= -1;
    // }
  }
  moveRight() {
    this.dir(SNAKESPEED, 0);
    // if (this.xdir>WIDTH-side) {
    //     this.xdir-=side;
    //     console.log("you lost")
    //     this.score= -1;
    //     }
  }

  // handles the initial 'creation' of the snake + the placement of the reward if there is a collision with the reward.
  drawSnake() {
    fill("hsb(160, 100%, 100%)");
    rect(this.x, this.y, side, side); //here I can actually see the snake
    //console.log("this.x + game.reward.x ", this.x, game.reward.x);
    let d = int(dist(this.x, this.y, game.reward.x, game.reward.y));
    console.log(d);
    if (this.x === game.reward.x && this.y === game.reward.y) {
      this.playerScore();
      console.log("got it");
    }
  }
  playerScore() {
    this.score += 100;
    game.reward.setRandomBreze();
    game.reward.drawReward();
    // this.letGrow();
    console.log(this.score);
  }
}
