//Function to check number sum
let sum = num => {
    let total = 0;
    for (let i = 1; i <= num; i++){
        total += i;
        return total;
    }
}

//Variables for performance measurements
let start;
let end;

//Testing of function and its performance
start = performance.now();
let n = sum(10);
end = performance.now();

//Final output
console.log(n, start-end);