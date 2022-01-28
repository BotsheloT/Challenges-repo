//Declaration of Array
let nums = [14, 30, 2, 12, 4, 83, 5];

//Function to get sum of array numbers
let sum = Array => {
    let total = 0;
    Array.forEach(num => {
        total += num;
    });
    return total;
}

//Final output
console.log(sum(nums));