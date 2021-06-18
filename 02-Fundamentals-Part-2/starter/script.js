'use strict';

/*let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicence = true;
if (hasDriversLicense) console.log('I can drive :D ');

const interface = 'Audio'*/

/*
function logger() {
    console.log('My name is Jonas');
}
//calling / running / invoking function
logger();
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice);*/

// Function declaration
/*
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1990);
console.log(age1);

//Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age1, age2);*/

//Arrow function
/*
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement (1991, 'Ophelie'));
console.log(yearsUntilRetirement (1980, 'Jonas'));*/

/*
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples)
    const orangePieces = cutFruitPieces(oranges)

    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    return juice;
}
console.log(fruitProcessor(2,3));*/

/*
const calcAge = function(birthYear) {
    return 2017 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
/!*    return `${firstName} retires in ${retirement} years`;*!/
}

console.log(yearsUntilRetirement(1991, 'Jonas'))
console.log(yearsUntilRetirement(1950, 'Mike'))*/

/*
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Ophelie';

const friends = ['Michael', 'Steven', 'Ophelie']
console.log(friends)

const years = new Array(1991, 1984, 2008, 2020)
console.log(years)

console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

//Add Elements
friends[2] = 'Jay';
console.log(friends);

friends.unshift('John');
console.log(friends);

//Remove elements

const popped = friends.pop(); // last
console.log(popped);
console.log(friends);

friends.shift(); // first
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob')); // si n'est pas dans l'arrêt, le résultat est automatiquement -1

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes('23'));
console.log(friends.includes(23));*/

//for loops keeps running while condition is TRUE
/*for(let rep = 5; rep <= 30; rep++) {
    console.log(`Hello repetition ${rep}`);
}*/

/*const jonas = [
    'Jonas',
    'Bugnon',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true,
]

const types = [];

for (let i = 0; i < jonas.length; i++) {
    console.log(jonas[i], typeof jonas[i]);
/!*    types[i] = typeof jonas[i];*!/
    types.push(typeof jonas[1]);
}

console.log(types);

const years = [1991, 2007, 2004];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2017-years[i]);
};

console.log(ages);

// continue and break
console.log('---- BREAK WITH NUMBER----')
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'string') continue;
    console.log(jonas[i], typeof jonas[i]);
}*/

/*const jonas = [
    'Jonas',
    'Bugnon',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true,
]
for(let i = jonas.length - 1; i >= 0; i--) {
    console.log(jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`--------Starting exercise ${exercise}`);

    for (let rep = 1; rep < 5; rep++ ) {
        console.log(`Lifting weight repetition ${rep}`)
    }
}*/

/*for(let rep = 1; rep <= 10; rep++) {
    console.log(`Hello repetition ${rep}`);
}

let rep = 1;
while (rep <= 10) {
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) {
        console.log(`Loop is about to end....`)
    }
};*/


