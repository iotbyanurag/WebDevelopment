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
NumOfColors = 6;
var Colors = generateRandomColors_Array(NumOfColors);
var pickedcolor = pickColor();

var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var resetButton = document.getElementById("reset");
var colorDisplay= document.getElementById("colorDisplay");
var easyMode = document.getElementById("easy");
var hardMode = document.getElementById("hard");

var Message = document.getElementById("message");
    console.log("picked color" + pickedcolor);
    colorDisplay.textContent = pickedcolor;
    // colors of each tile are populated 
    for (var i=0; i<squares.length; i++){
        //select color and apply to the squares
        squares[i].style.backgroundColor = Colors[i];
    
        // add a click event listener to each of the squares
        squares[i].addEventListener("click", select_Square);
      
    }

easyMode.addEventListener("click", function(){
    NumOfColors = 3;
    easyMode.classList.add("selected");
    hardMode.classList.remove("selected");

    Colors = generateRandomColors_Array(NumOfColors);
    console.log("colorsArray" + Colors);
    for (var i=0; i< squares.length; i++){
        if(Colors[i]){
            squares[i].style.backgroundColor = Colors[i];
        }
        else{
            squares[i].style.display = "none";   
        }
        //select color and apply to the squares
    } 

    pickedcolor= pickColor();
    colorDisplay.textContent = pickedcolor;
});

hardMode.addEventListener("click", function(){
    NumOfColors = 6;
    hardMode.classList.add("selected");
    easyMode.classList.remove("selected");
    Colors = generateRandomColors_Array(NumOfColors);
   
    for (var i=0; i<squares.length; i++){
        //select color and apply to the squares
        squares[i].style.display = "block"
        squares[i].style.backgroundColor = Colors[i];
    }    
    pickedcolor= pickColor();
    colorDisplay.textContent = pickedcolor;
});



// reset button has to behave differently in different modes:
// in EASY mode, we need to geenerate only 3 random list of colors 
// whereas in HARD mode we need to generate 6 colors.
resetButton.addEventListener("click", function(){
    Colors = generateRandomColors_Array(NumOfColors);
   // console.log(GameMode + Colors);
    pickedcolor = pickColor();
    colorDisplay.textContent = pickedcolor;
    h1.style.background = "#232323"
    for (var i=0; i<squares.length; i++){
        //select color and apply to the squares
        squares[i].style.backgroundColor = Colors[i];
    }
    // alert("connected");
}
);


// any random color is picked
//console.log("picked color" +pickedcolor)

function onChangeColor(){
    // ColorsArray = [];
    // generateRandomColors_Array(6);
    // for (var i=0; i<squares.length; i++){
    //     //select color and apply to the squares
    //      squares[i].style.backgroundColor = ColorsArray[i];
    //     // for (var i=0; i< ColorsArray.length; i++){
    //     //     console.log(ColorsArray[i]);
    //     // }
    // }
    alert("connected");
}


// using this keyword you can refer to the item that was clicked 
// passed the event handler to the event listener.

 function select_Square(){
   // alert(this.style.backgroundColor);
    var clickedColor = this.style.backgroundColor;
    //console.log("clicked" + clickedColor);
    if(clickedColor === pickedcolor){
        // alert("CORRECT");
        Message.textContent = "Correct";
        changeColorOnMatch(clickedColor);
        h1.style.background = clickedColor;
        resetButton.textContent = "PLAY AGAIN?";
    }
    else{
       this.style.background = "#232323";
       Message.textContent = "Try Again";   
       //alert("Wrong"); 
       resetButton.textContent = "New Colors";
    } 
 }

function changeColorOnMatch(color){
    // on getting correct answer, change color of all tiles to the color of correct suare
    for(var i=0; i<squares.length; i++ ){
        squares[i].style.backgroundColor = color;
    }
}

function generateRandomColors_Array(num){
  var ColorsArray = [];
    for (var i=0; i<num; i++){
       ColorsArray.push(randomiseColors()); 
    }
    return ColorsArray;
}

function pickColor(){
    var random =Math.floor(Math.random() * Colors.length);
    return Colors[random];
}

function randomiseColors(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var rgb = "rgb" + "(" + r + ", " + g + ", " + b +")";
    return rgb;
}