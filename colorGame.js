var numSquares = 6;
var colors = [];
var pickedColor = pickColor();

var squares = document.querySelectorAll('.square');
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.getElementById('message');
var h1Display = document.getElementsByTagName('h1')[0];
var resetButton = document.getElementById('reset');
var modeButtons = document.querySelectorAll('.mode');


// colorDisplay.textContent = pickedColor;

init();

resetButton.addEventListener('click',reset);

// resetButton.addEventListener('click',function(){
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (let i = 0; i < squares.length; i++){
//         squares[i].style.backgroundColor = colors[i];
//     }
//     h1Display.style.backgroundColor = 'steelblue';
//     this.textContent = 'New Colors';
//     messageDisplay.textContent = '';
// });

// easyBtn.addEventListener('click',function(){
//     easyBtn.classList.add('selected');
//     hardBtn.classList.remove('selected');
//     numSquares = 3;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     h1Display.style.backgroundColor = 'steelblue';
//     for (let i = 0; i < squares.length; i++){
//         if(colors[i]){
//             squares[i].style.backgroundColor = colors[i];
//         }
//         else {
//             squares[i].style.display = 'none';
//         }
//     }
// });

// hardBtn.addEventListener('click',function(){
//     easyBtn.classList.remove('selected');
//     hardBtn.classList.add('selected');
//     numSquares = 6;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     h1Display.style.backgroundColor = 'steelblue';
//     for (let i = 0; i < squares.length; i++){
//         squares[i].style.backgroundColor = colors[i];
//         squares[i].style.display = 'block';
//     }
// });

function init(){
    setupModeButtons();
    setupSquares();
    reset();
}

function changeColors(color){
    squares.forEach( (square) => square.style.backgroundColor = color);
} 

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    var arr = [];
    for (let i = 0; i < num; i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    var red = Math.floor( Math.random() * 256 );
    var green = Math.floor( Math.random() * 256 );
    var blue = Math.floor( Math.random() * 256 );
    return 'rgb(' + red + ', ' + green + ', ' + blue + ')';
}

function reset(){
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (let i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = 'block';
        }
        else {
            squares[i].style.display = 'none';
        }
    }
    h1Display.style.backgroundColor = 'steelblue';
    resetButton.textContent = 'New Colors';
    messageDisplay.textContent = '';
}

function setupModeButtons(){
    for (let i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener('click',function(){
            modeButtons[0].classList.remove('selected');
            modeButtons[1].classList.remove('selected');
            this.classList.add('selected');
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();
        })
    };
}

function setupSquares(){
    for(let i = 0; i < squares.length; i++){
        // squares[i].style.backgroundColor = colors[i];
        squares[i].addEventListener('click', function(){
            var clickedColor = this.style.backgroundColor;
            if(clickedColor === pickedColor){
                // squares.forEach( (square) => square.style.visibility = 'visible');
                changeColors(clickedColor);
                h1Display.style.backgroundColor = pickedColor;
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?";
            } else {
                // this.style.visibility = "hidden";
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}