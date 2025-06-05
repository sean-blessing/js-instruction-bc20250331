//    const readline = require('readline').createInterface({
//      input: process.stdin,
//      output: process.stdout,
//    });

//    readline.question('What is your name? ', (name) => {
//      console.log(`Hello, ${name}!`);
//      readline.close();
//    });

const prompt = require('prompt-sync')();

const name = prompt('What is your name? ');
console.log(`Hello, ${name}!`);

let nbr1 = parseInt(prompt('Enter whole number: '));
let nbr2 = parseInt(prompt('Enter 2nd whole number: '));
let pdt = nbr1 * nbr2;

console.log('Product is: '+pdt);