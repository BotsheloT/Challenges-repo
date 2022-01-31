//Array of items
let names = ['Jerry', 'Beth', 'Morty', 'Rick', 'Timmy', 'Ben', 'Summer', 'Patrick'];

//Item to be searched for
let search = 'Summer';

//Search Algorithm
for (let i = 0; i < names.length; i++){
    if (search === names[i]){
        console.log('Item found');
        break;    
    }
}
