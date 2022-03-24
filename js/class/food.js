class Food {
    constructor() {
        this.size = squarSize;
        this.RandomPosition();
    }

    RandomPosition() {
        this.x = Math.round(Math.random() * gameSize % ((gameSize / this.size)) - 1);
        this.y = Math.round(Math.random() * gameSize % ((gameSize / this.size)) - 1);
        console.log(this.x, this.y);
    }

    draw() {
        ctx.fillStyle = "red";
        ctx.fillRect(this.x * this.size, this.y * this.size, this.size, this.size);
    }
}