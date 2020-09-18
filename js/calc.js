// let seven = document.getElementById('seven');
// let eight = document.getElementById('eight');
// let nine = document.getElementById('nine');
// let four = document.getElementById('four');
// let five = document.getElementById('five');
// let six = document.getElementById('six');
// let one = document.getElementById('one');
// let two = document.getElementById('two');
// let three = document.getElementById('three');
// let zero = document.getElementById('zero');
//
//
//
// function sevenBtn() {
//   console.log("7");
//     // add number seven to current running memory and main display
// }
//
//
// function equate(x,y,z) {
//   // return to main display the remainder of
//   // x which is the first number used
//   // y which is the operant used and
//   // z which is the second number used
// }

//function for displaying values
function dis(val) {
  document.getElementById("display").value+=val
}


//function for evaluation
function solve() {
  let x = document.getElementById("display").value
  let y = eval(x)
  document.getElementById("display").value = y
}
//function for clearing the display
function clr() {
  document.getElementById("display").value = ""
}
