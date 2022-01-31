//Array of items
/* let names = ['Jerry', 'Beth', 'Morty', 'Rick', 'Timmy', 'Ben', 'Summer', 'Patrick'];
let items = [1, 2, 3 , 4, 5, 6, 7, 8];

//Item to be searched for
let search = 'Summer';
let target = 7; */

//Linear Search Algorithm
let linearS = (items, target) =>{
    let result = null;
    for (let i = 0; i < items.length; i++){
        if (target === items[i]){  
            result = i;                     
            break;    
        }
    }
    return result;
}


//Binary Search Algorithm

