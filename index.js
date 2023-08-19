// Your code here
const dodger = document.getElementById("dodger")
dodger.style.backgroundColor = "#FF69B4"

//Moves dodger up 100px from the bottom
// dodger.style.bottom = "100px" 

//Moves dodger to the very left of the screen
// dodger.style.left = "0px"

// document.addEventListener("keydown", function moveDodgerLeft() {
//   const leftNumbers = dodger.style.left.replace("px", "");
//   const left = parseInt(leftNumbers, 10);

//   if (left > 0) {
//     dodger.style.left = `${left - 1}px`;
//   }
// })


//Move dodger to the left
function moveDodgerLeft(){
      const leftNumbers = dodger.style.left.replace("px", "");
      const left = parseInt(leftNumbers, 10);
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

//Move dodger to the right
function moveDodgerRight(){
    const rightNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(rightNumbers, 10);
    if (0 <= left && left <= 360) {
        dodger.style.left = `${left + 1}px`
    }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (e.key === "ArrowRight") {
    moveDodgerRight()
  }
});