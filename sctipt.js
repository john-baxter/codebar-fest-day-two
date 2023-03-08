console.log('Javascript is running!')

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const WIDTH = 400
const HEIGHT = 400


let redSquarePosition = {
  left: 50,
  top:100,
}

function drawRedSquare() {
  ctx.fillStyle = "red";
  ctx.fillRect(redSquarePosition.left, redSquarePosition.top, 50, 50);
}

drawRedSquare()

function drawWinScreen() {

  const ctx = document.getElementById("canvas").getContext("2d");
  ctx.font = "48px serif";
  ctx.fillStyle = "lime"
  ctx.fillText("You win!", 10, 50);

}

function clearAndRedrawRedSquare() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT)
  drawRedSquare()
}

function listener(event) {
  console.log(event.code)
  // when I press Space, move the red shape to the right
  if (event.code === 'ArrowRight') {
    // move the shape
    redSquarePosition.left += 10
    
    // clear the canvas
    // clearAndRedrawRedSquare();

    // if (redSquarePosition.left >= 400) {
    //   drawWinScreen()
    // }
  }
  if (event.code === 'ArrowLeft') {
  redSquarePosition.left -= 10

  // clearAndRedrawRedSquare();


  // if (redSquarePosition.left >= 400) {
  //   drawWinScreen()
  // }
}
  if (event.code === 'ArrowUp') {
    redSquarePosition.top -= 10
    // clearAndRedrawRedSquare();


    // if (redSquarePosition.left >= 400) {
    //   drawWinScreen()
    // }
  }
  if (event.code === 'ArrowDown') {
  redSquarePosition.top += 10
  // clearAndRedrawRedSquare();

  }
  
  clearAndRedrawRedSquare();

  if (redSquarePosition.left >= 400) {
    drawWinScreen()
  }
  
  // clearAndRedrawRedSquare();

  
}

window.addEventListener('keydown', listener)