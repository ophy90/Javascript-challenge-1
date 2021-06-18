/*let js = 'amazing';
console.log(40 + 8 + 23 - 10);
console.log('Jonas');
console.log(23);

// Variable name conventions

let person = 'Jonas'

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "Jonas");

javascriptIsFun = "YES!"
console.log(typeof javascriptIsFun);

let year;
console.log(year)
console.log(typeof year)

year = 1991;
console.log(typeof year)

console.log(typeof null)*/

/*let age = 30;
age = 31;

const birthYear = 1991;

let lastName = 'Bugnon'
console.log(lastName)*/

//mathematics operators
/*const now = 2037;

const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah)

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3)

const firstName = 'Ophélie'
const lastName = 'Bugnon'
console.log(firstName + " " + lastName);

//assignement operators
let x = 10 + 5;
x += 10
x *= 4;
x ++;
x --;
x --;
console.log(x);

//Comparisons operators
console.log(ageJonas > ageSarah);
console.log(ageJonas < ageSarah);
console.log(ageJonas <= ageSarah);
console.log(ageJonas >= ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018);*/

/*const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);

console.log()*/

//importante of Strings
/*const firstName = 'Ophélie';
const job = 'Developer';
const birthYear = 1990;
const year = 2021;

const ophelie = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';

const ophelieNew = `I'm ${firstName} a ${year - birthYear} years old ${job}!`;
console.log(ophelieNew);

console.log(`Just a regular string...`)

console.log('String with \n\
multiple lines')
console.log(`String with
multiple lines`)*/

/*const age = 15;
const isOldEnough = age >= 18;
if (isOldEnough) {
    console.log('Sarah can start driving license');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 1991;
let century;
if (birthYear <= 2000) {
    let century = 20;
} else {
    let century = 21;
}
console.log(century);*/

// type convertion
/*const inputYear = "1991";
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);
console.log(String(23));

//type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');
console.log('23' > '18');*/

// 5 falsy values: 0, '', undefined, null, Nan
/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if(money) {
    console.log("Don't spend it all");
} else {
    console.log('You should get a job!');
}

let height = 0;
if (height) {
    console.log('YAY ! Height is define');
} else {
    console.log('Height is UNDEFINED');
}*/

/*const age = '18';
if(age === 18) console.log('You just became an adult (strict)')
if(age == 18) console.log('You just became an adult (loose)')*/

/*const favourite = Number(prompt('Whats your favourite number ?'))
console.log(favourite)
console.log(typeof favourite)

if (favourite === 23) { // '23' == 23
    console.log('Cool! 23 is an amazing number!')
} else if (favourite === 7){
    console.log('7 is also a cool number')
} else {
    console.log('number is not 23 or 7 ')
}

if (favourite !== 23) console.log("Why not 23?")*/

/*const hasDriversLicense = true; //A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision );
console.log(hasDriversLicense || hasGoodVision );
console.log(!hasDriversLicense);

/!*let shouldDrive = hasDriversLicense && hasGoodVision;
if (shouldDrive) {
    console.log('Sarah is able to drive!')
} else {
    console.log('Someone else should drive...')
}*!/

const isTired = false ; // C

shouldDrive = hasDriversLicense && hasGoodVision && !isTired;
if (shouldDrive) {
    console.log('Sarah is able to drive!')
} else {
    console.log('Someone else should drive...')
}*/
//*********************************************************************
// Swith statement
/*const day = 'tuesday';
/!*switch(day) {
    case 'monday': //day === 'monday' -> if this is true
        console.log('Plan course structure');
        console.log('Go go coding meetup');
        break; // le code continue jusqu'à qu'il y a un break
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekends');
        break;
    default:
        console.log('Not a valid day!')
}*!/

if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go go coding meetup');
} else if (day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'thursday' || day === 'wednesday') {
    console.log('Write code examples');
} else if  (day === 'friday')  {
    console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekends');
} else {
    console.log('Not a valid day!');*/
/*}*/

// TERNARY OPERATORS
/*const age = 23;
age >= 18? console.log('I like to drink wine') : console.log('I like to drink water: ');

const drink = age >= 18? 'Wine' : 'water';
console.log(drink)

console.log(`I like to drink ${age >= 18? 'Wine' : 'water'}`);*/


