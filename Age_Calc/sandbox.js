// Function to calculate a user's age
let calc = (bDate) =>{
    //Variables for current date
    let nowDate = new Date;
    let nYear = nowDate.year;
    let nMonth = nowDate.month;
    let nDay = nowDate.getDay;

    //Age calculation
    if(nMonth < bDate.month){
        return nYear - (bDate.year -1);
    } else if (nMonth > bDate.month){
        return nYear - bDate.year;
    } else if ((nMonth == month) && (nDay <= bDate.getDay)){
        return nYear - bDate.year;
    } else return nYear - (bDate.year -1);
            
}

//Variable for button selection using DOM
let btn = document.querySelector('.btn');

//Button click code
btn.onclick = function(){
    //Querying all input for final output

    //Name input
    let name = document.querySelector('.name').value;
    let surname = document.querySelector('.sur').value;

    //Date of birth input
    let dob = document.querySelector('.dob').value;    
    
    //Age Calculation
    let age = calc(dob);

    // Final output
    alert(`${name} ${surname} is ${age} years old right now`);
}