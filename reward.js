class Reward {
    constructor(x, y) {
        this.x= 400;               //setting starting point of the apple
        this.y= 400;
    }
    setRandomApple() {
        this.x=Math.floor(Math.random() * 30) * side; 
        this.y=Math.floor(Math.random() * 30)* side; 
    }
    drawReward() {
        image(rewardImg, this.y, this.x, side, side)
    }
}