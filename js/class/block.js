class Block {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
    }

    borderMap() {
        if (this.x < 0) {
            this.x = gameSize / this.size;
        } else if (this.x > gameSize / this.size) {
            this.x = 0;
        };
        if (this.y < 0) {
            this.y = gameSize / this.size;
        } else if (this.y > gameSize / this.size) {
            this.y = 0;
        }
    }

    draw() {
        ctx.fillStyle = "green";
        ctx.fillRect(this.x * this.size, this.y * this.size, this.size, this.size);
    }
}