const gameSize = 600;
const squarSize = 20;


const canvas = document.getElementById("game");
const ctx = canvas.getContext('2d');

const snake = new Snake(squarSize);
const food = new Food();

let direction = "right";

function detectKeyPressed() {
    document.addEventListener("keydown", (event) => {
        console.log(event.key)
        switch (event.key) {
            case "ArrowLeft":
                direction = "left";
                break;
            case "ArrowRight":
                direction = 'right';
                break;
            case "ArrowUp":
                direction = 'up';
                break;
            case "ArrowDown":
                direction = 'down';
                break;
            default:
                break;
        }
    })
};

function clearScreen() {
    ctx.clearRect(0, 0, gameSize, gameSize);
}

function update() {
    clearScreen();
    food.draw();
    snake.update();
    setTimeout(update, 150)
};

function start() {
    detectKeyPressed();
    update();
};

start();