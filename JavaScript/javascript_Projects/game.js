
// var secret_no = 7;
// var guess = prompt("Guess the Number");
// guessN = Number(guess);
// console.log(guessN);

// // check if higher
// //print all the numbers divisible by 5 and 3 between 5 and 50
// while(guessN < 100){
//     console.log("guess: " + guessN);
//     guessN++;
// }

var start_num = 5;

// while(start_num<=50){
//     if((start_num % 3 === 0 ) && (start_num % 5 === 0)){
//         console.log("printing the number:" + start_num);
//     }
//     start_num++;
// }

for(start_num=5;start_num<50;start_num++){
    if((start_num % 3 === 0 ) && (start_num % 5 === 0)){
                console.log("printing the new number-------:" + start_num);
            }        
}

function is_even(num){

    if(num % 2 === 0){
        return true;
    }
    else{
        return false;
    }   
}

console.log(is_even(4));
console.log(is_even(10));
console.log(is_even(13));


var factorial =1;

function calc_factorial (num){   
   
        factorial = factorial * num; // 4*3*2*1
        console.log(factorial);
  
    return factorial;
}
console.log(calc_factorial(4));