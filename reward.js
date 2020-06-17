class Reward {
    constructor(x, y) {
        this.x= 300;               //setting starting point of the apple
        this.y= 300;
    }
    setRandomBreze() {
        this.x=Math.floor(Math.random() * 20) * side; 
        this.y=Math.floor(Math.random() * 20)* side; 
    }
    drawReward() {
        image(rewardImg, this.x, this.y, side, side)
    }
}