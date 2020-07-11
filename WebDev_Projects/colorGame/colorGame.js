// var colors = [
//     "rgb(255, 0, 0)",
//     "rgb(0, 255, 0)",
//     "rgb(0, 0, 255)",
//     "rgb(255, 255, 0)",
//     "rgb(255, 0, 255)",
//     "rgb(25, 255, 0)",
//     "rgb(25, 0, 255)"
// ]

// array is populated
var ColorsArray = [];
generateRandomColors_Array(6);
for(var i=0; i< 6; i++){
    console.log(ColorsArray[i]);
}
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");

// any random color is picked.
var pickedcolor = pickColor();

//console.log("picked color" +pickedcolor);
var colorDisplay= document.getElementById("colorDisplay");

var Message = document.getElementById("message");
console.log("picked color" + pickedcolor);
colorDisplay.textContent = pickedcolor;

// colors of each tile are populated 
for (var i=0; i<squares.length; i++){
    //select color and apply to the squares
    squares[i].style.backgroundColor = ColorsArray[i];

    // add a click event listener to each of the squares
    squares[i].addEventListener("click", select_Square);
  
}

// using this keyword you can refer to the item that was clicked 
// passed the event handler to the event listener.

 function select_Square(){
   // alert(this.style.backgroundColor);
    var clickedColor = this.style.backgroundColor;
    console.log("clicked" + clickedColor);
    if(clickedColor === pickedcolor){
        // alert("CORRECT");
        Message.textContent = "Correct";
        changeColorOnMatch(clickedColor);
        h1.style.background = clickedColor;
    }
    else{
       this.style.background = "#232323";
       Message.textContent = "Try Again";   
       //alert("Wrong"); 
    } 
}

function changeColorOnMatch(color){
    // on getting correct answer, change color of all tiles to the color of correct suare
    for(var i=0; i<squares.length; i++ ){
        squares[i].style.backgroundColor = color;
    }
}

function generateRandomColors_Array(num){
  
    for (var i=0; i<num; i++){
       ColorsArray.push(randomiseColors()) 
    }
}

function pickColor(){
    var random =Math.floor(Math.random() * ColorsArray.length);
    return ColorsArray[random];
}

function randomiseColors(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var rgb = "rgb" + "(" + r + ", " + g + ", " + b +")";
    return rgb;
}