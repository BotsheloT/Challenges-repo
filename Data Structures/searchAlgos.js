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
let bSearch = (items, target) =>{
    let first = 0;
    let last = items.length;

    while (first <= last){
        let middle = Math.floor((last + 1) /2);

        if (item[middle] === target){
            return middle;
        } else if(item[middle] > target){
            last = middle -1;
        } else if (item[middle] < target){
            first = middle + 1;
        }
    }
    return null;
}

/* // Recursive Linear Search Algorithm
let rSearch = (items[i], target) =>{    
    if (item[i] != target){
        i ++;
        return -1;
    } else 
    rSearch;     
} */