//My code test
/* let word = 'hi';
let reverse = '';

for (let i = word.length; i >= 0 ; i--){
    
    reverse += word[i];
}

console.log(reverse); */

//Exercise code
let word = 'tenet';
let letters = [];
let rword = '';

for (let i = 0; i < word.length; i++){
    letters.push(word[i]);
}

for (let i = 0; i < word.length; i++){
    rword += letters.pop();
}

console.log(`The word given is ${word} and its reverse is ${rword}`);