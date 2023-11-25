let squres = document.getElementsByClassName("squre");
let colorDisplay = document.getElementById("color-display");
let result = document.getElementById("result");
let playAgain = document.getElementById("play-again");
let newColor = document.getElementById("new-color");
let header = document.getElementById("header");
let colors = [];

function generateColor() {
  let i ;
  for (i = 0; i < squres.length; i++) {
    colors.push(
      `RGB(${Math.floor(Math.random() * 255)},${Math.floor(
        Math.random() * 255
      )},${Math.floor(Math.random() * 255)})`
    );
  }
}
generateColor();
function asignColor() {
  let i ;
  for(i=0;i<squres.length;i++){
    squres[i].style.backgroundColor = colors[i];
    squres[i].setAttribute("data-color",colors[i]);
  }
}
asignColor();

function getrandomColor(){
let randomColor = colors[Math.floor(Math.random()*squres.length)];
colorDisplay.innerText = randomColor;
return randomColor;
}
let pickedColor = getrandomColor();

function checkColor(){
  let i,j;
  for(i=0;i<squres.length;i++){
    squres[i].onclick = function(){
      let getColor = this.getAttribute("data-color");
      if(getColor == pickedColor){
        for(j=0;j<squres.length;j++){
          squres[j].style.opacity = "1";
          squres[j].style.backgroundColor = pickedColor;
        }
        playAgain.innerHTML = "Play Again";
        header.style.background = pickedColor;
        result.innerText = "Correct";
      }
      else{
        result.innerText = "Wrong";
        this.classList.add("fade");
      }
    }
  }
}
checkColor();

function reset (){
  window.location = location.href;
}
newColor.onclick = function(){
  reset();
}
playAgain.onclick = function(){
  reset();
}