// Function to calculate a user's age
let calc = (bDate) =>{
    //Variables for current date
    let nowDate = new Date;
    let nYear = number(nowDate.year);
    let nMonth = number(nowDate.month);
    let nDay = number(nowDate.getDay);

    let cAge = null;

    //Age calculation
/*     if((nYear > number(bDate.year)) && (nMonth < number(bDate.month))){
        return nYear - number((bDate.year -1));
    } else if (nMonth > numbner(bDate.month)){
        return nYear - number(bDate.year);
    } else if ((nMonth == number(bDate.month)) && (nDay <= number(bDate.getDay))){
        return nYear - number(bDate.year);
    } else return nYear - number((bDate.year -1)); */

    if (nYear == bDate.year){
        cAge = `${nMonth - bDate.month} months old`;
    } else cAge = `${nYear - bDate.year} years old`;

    return cAge;
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

    // Final output
    alert(`${name} ${surname} is ${calc(dob)} old right now`);
}