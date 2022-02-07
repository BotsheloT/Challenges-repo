//Fucntion for bmi calculation
let bmiCalc = (weight, height) =>{
    return weight/(height**2);
}

//Variables for calculation
let h = document.querySelector('.height input');
let w = document.querySelector('.weight input');
let age = document.querySelector('.age input')

//Variable for button
let but = document.querySelector('button');