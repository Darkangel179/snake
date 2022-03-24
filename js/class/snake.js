class Snake {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.blockSize = squarSize;
        this.blocks = [];
        this.addBlock(this.x, this.y);
        console.log(this.blocks)

    }
    addBlock(x, y) {
        const block = new Block(x, y, this.blockSize);
        this.blocks.push(block);
    }

    moveHead() {
        const head = this.blocks[0];
        switch (direction) {
            case "left":
                head.x -= 1;
                break;
            case "right":
                head.x += 1;
                break;
            case "up":
                head.y -= 1;
                break;
            case "down":
                head.y += 1;
                break;
            default:
                break;
        }
        head.borderMap();
    }

    eat() {
        const head = this.blocks[0];
        if (head.x === food.x && head.y === food.y) {
            food.RandomPosition();
        }
    }

    update() {
        for (const block of this.blocks) {
            block.draw()
        };
        this.moveHead();
        this.eat();
    }
}