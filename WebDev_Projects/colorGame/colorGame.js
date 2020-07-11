var colors = [
    "rgb(255, 0, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 0, 255)",
    "rgb(255, 255, 0)",
    "rgb(255, 0, 255)",
    "rgb(25, 255, 0)",
    "rgb(25, 0, 255)"
]

var squares = document.querySelectorAll(".square");

var pickedcolor = colors[3];
var colorDisplay= document.getElementById("colorDisplay");
console.log(colorDisplay);
colorDisplay.textContent = pickedcolor;

for (var i=0; i<squares.length; i++){
    //select color and apply to the squares
    squares[i].style.backgroundColor = colors[i];

    // add a click event listener to each of the squares
    squares[i].addEventListener("click", select_Square);
}

// using this keyword you can refer to the item that was clicked 

// passed the event handler to the event listener.
function select_Square(){
    var clickedColor = this.style.backgroundColor;
    if(clickedColor === pickedcolor){
        alert("CORRECT");
    }
    else{
        alert("INCORRECT");
    }
}