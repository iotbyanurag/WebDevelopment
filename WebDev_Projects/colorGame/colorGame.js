
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

// reset button i.e. NEW COLORS/PLAY AGAIN has to behave differently in different modes:
// in EASY mode, we need to geenerate only 3 random list of colors 
// whereas in HARD mode we need to generate 6 colors.
resetButton.addEventListener("click", function(){
    Message.textContent = "";
    resetButton.textContent = "New Colors";
    h1.style.background="steelblue";
    console.log("h1 color" + h1.style.background);

    console.log("clicked the NEW COLOR BUTTON");
    Colors = generateRandomColors_Array(NumOfColors);
   // console.log(GameMode + Colors);
    pickedcolor = pickColor();
    colorDisplay.textContent = pickedcolor;
    
    for (var i=0; i<squares.length; i++){
        //select color and apply to the squares
        squares[i].style.backgroundColor = Colors[i];
    }
    // alert("connected");
}
);
// any random color is picked

// using this keyword you can refer to the item that was clicked 
// passed the event handler to the event listener.

 function select_Square(){
    var clickedColor = this.style.backgroundColor;
    if(clickedColor === pickedcolor){

        // if the user selects the correct color.
        Message.textContent = "Correct";
        changeColorOnMatch(clickedColor);
        h1.style.background = clickedColor;
        // this is the same button, only the text content changes.
        resetButton.textContent = "PLAY AGAIN?";  
    }
    else{
       this.style.background = "#232323";
       Message.textContent = "Try Again"; 
       console.log("Message Content" + Message.textContent);  
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