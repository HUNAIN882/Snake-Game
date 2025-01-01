let direction = {x: 0, y: 0};
const foodSound = new Audio('Assets/music/food.mp3');
const gameOverSound = new Audio('Assets/music/gameover.mp3');
const moveSound = new Audio('Assets/music/move.mp3');
const musicSound = new Audio('Assets/music/music.mp3');
let speed = 2;
let lastPaintTime = 0;
let snakeArr = [
    {x: 13, y: 15}
]
food = {x: 6, y: 7};

// Game Functions
function main(ctime) {
    window.requestAnimationFrame(main);
    // console.log(ctime)
    if((ctime - lastPaintTime)/1000 < 1/speed){
        return;
    }
    lastPaintTime = ctime;
    gameEngine();
    
}

function gameEngine() {
    // Part 1: Updating the Snake Array & Food 

    // Part 2: Display The Snake And Food 
    // display the snake
    board.innerHTML = "";
    snakeArr.forEach((e, index) => {
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        snakeElement.classList.add('snake');
        if(index == 0) {
            snakeElement.classList.add('head');
        }
        else {
            snakeElement.classList.add('snake');
        }
       
        board.appendChild(snakeElement);
    });

    // Display The food
    foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food')
    board.appendChild(foodElement);
}


// main logic starts here
window.requestAnimationFrame(main);
window.addEventListener('keydown', e => {
    inputDir = {x: 0, y: 1} // Start the game
    moveSound.play();
    switch (e.key) {
        case "ArrowUp":
            console.log("ArrowUp");
            inputDir.x = 0;
            inputDir.y = -1;
        break;

        case "ArrowDown":
        console.log("ArrowDown")
        inputDir.x = 0;
        inputDir.y = 1;
        break;

        case "ArrowLeft":
            console.log("ArrowLeft")
            inputDir.x = -1;
            inputDir.x = 0;
            break;

            case "ArrowRight":
                console.log("ArrowRight")
                inputDir.y = 1;
                inputDir.x = 0;
                break;
        default:
            break;
    }
});