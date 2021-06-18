'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
[weekdays[3]]: {
    open: 12,
    close: 22,
  },
[weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  //ES6 enhanced object literals
  openingHours,

  // order: function(starterIndex, mainIndex) {
  //   return [this.starterMenu].this.mainMenu(mainIndex)
  // }

  order: function (starterIndex, mainIndex) {
    return (this.starterMenu[starterIndex], this.mainMenu[mainIndex]) ;
  },

  orderDelivery({
                  starterIndex = 1,
                  mainIndex = 0,
                  time = '20:00',
                  address })
  {
    console.log(
        `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderDelivery: function (starterIndex, mainIndex, time, address) {
    return console.log('Order received');
  },
  orderPasta: function(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function(mainIngredient, ...other) {
    console.log(mainIngredient);
    console.log(other);
  }
};

/*// Split and join
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function(name) {
  const names = name.split(' ');
  const namesUpper = [];

  // namesUpper.push(n[0].toUpperCase() + n.slice(1)); // mê chose que la méthode en dessous

  for(const n of names) {
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '))
}
capitalizeName('jessica ann smith davis');
capitalizeName('jonas schmedtmann');
capitalizeName('ophelie bugnon');

// Padding
const message = 'Go to gate 23!'
console.log(message.padStart(25, '+').padEnd(35, '+'));
console.log('Jonas'.padStart(25, '+').padEnd(35, '+'));

const maskCreditCard = function(number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*')
};

console.log(maskCreditCard(428282892929));
console.log(maskCreditCard(33333333));

//Repeat
const message2 = 'Bad weather... All departures delayed... ';
console.log(message2.repeat(5));

const planesInLine = function(n) {
  console.log(`There are ${n} planes in line!`.repeat(n));
}
planesInLine(1);
planesInLine(3);
planesInLine(5);*/

/*
const airline = 'TAP Air Portugal';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//Fix capitalization in name
const passenger = 'jOnAS'; // Jonas
const passengerLower = passenger.toLowerCase();
console.log(passengerLower);
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

//Comparing emails
const email = 'hello@jonas.io';
const loginEmail = 'Hello@Jonas.io \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

//replacing
const priceGB = '288,97 £';
const priceUS = priceGB.replace('£', '$').replace(',', '.')
console.log(priceUS)

const announcement = 'All passenger come to boarding door 23, Boarding door 23!'
console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));

console.log(announcement.replace(/door/g, 'gate'));

//Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Airb'))

if(plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW airbus FAmily');
};

//practive exercice

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not allowed on board');
  } else
    console.log('Welcome aboard !')
};
checkBaggage('I have a laptop, some food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');
*/

//Working with strings PART 1

/*
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('8737'[0]);

console.log(airline.length);
console.log('8737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('portugal'));

console.log(airline.slice(4)); // donne moi ce qu'il y a depuis caractère no 4
console.log(airline.slice(4, 7)); // donne moi ce  qu'il y a dès le 4 et jusqu'au 7 (non inclus)

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ')+ 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function(seat) {
  //B and C are the middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'C')
    console.log('You got the middle seat')
  else
    console.log('You got lucky')
}

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('jonas'));

console.log(typeof new String('jonas'));
console.log(typeof new String('jonas').slice(1));
*/


/*//Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);
let openStr = `We are open on ${properties.length} days:`
for (const day of Object.keys(openingHours)) {
  openStr += `${day}, `
}
console.log(openStr)
//Property VALUES
const values = Object.values(openingHours);
console.log(values);
//Entire object
const entries = Object.entries(openingHours);
console.log(entries);
for (const [key, {open, close}] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}*/
//(Key, value)
/*
if (restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);
//WITH optional chaining
console.log(restaurant.openingHours?.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

//Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

//Arrays
// const users = [];

const users = [{name: 'Jonas', email: 'helloj@onas.io'}];
console.log(users[0]?.name ?? 'User array empty');

if(users.length > 0) console.log(users[0]?.name); else console.log('user array empty');
*/

/*const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item);

for (const [i, el] of menu.entries ()) {
  console.log(`${i + 1}: ${el}`);
}*/

/*//1. Destructuring

// Rest pattern in arrays
const arr = [1,2, ...[3,4]];
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(pizza, risotto, otherFood);

// Rest pattern in objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//2. Functions
const add = function(...numbers) {
  let sum = 0;
  for(let i= 0; i<numbers.length; i++) sum += numbers [i];
  console.log(sum);

};
add(2,3);
add(5, 3, 7, 2);

const x =  [23, 5, 7];
add( ...x );

restaurant.orderPizza('mushroom', 'onion', 'olives', 'spinach');
//real world example
restaurant.orderPizza('mushrooms');*/

/*console.log('-----OR------')
// Use ANY data type, return ANY data type, short circuiting
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 23;
const guests1 =  restaurant.numGuests ?  restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('-----AND------');

console.log(0 && 'Jonas');
console.log(7 && 'Jonas');
console.log('Hello' && 23 && null && 'Jonas');

//Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');*/


/*const ingredients = [prompt("Let's make pasta! Ingredient 1?"), prompt("Ingredient 2?"), prompt("Ingredient 3?")]
console.log(ingredients)

restaurant.orderPasta(ingredients[0],ingredients[1], ingredients[2])
restaurant.orderPasta(...ingredients);*/

//objects
/*const newRestaurant = {foundingIn: 1998, ...restaurant, founder: 'Guiseppe'};


const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);*/


//////////////////////////////////////////////////////////
//Destructuring Objects

/*restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});*/

//The Spread operators

/*const arr = [7, 8, 9];
const badNewArray = [1, 2, arr[0], arr[1], arr[2]]


const newArr = [1,2, ... arr];
console.log(newArr)

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci']
console.log(newMenu)

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 arrays
const menu = [... restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

//Iterables, array, strings, maps, sets NOT objects

const str = 'Jonas';
const letters = [...str, " ", "s."]
console.log(letters);
console.log(...str);


const {name, openingHours, categories} = restaurant;
console.log(name,openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags
} = restaurant;
console.log(restaurantName,hours, tags )


// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14}

/!*({a, b} = obj);
console.log(a, b);*!/

//Nested objects
const {
  fri: {open: o, close: c},
} = openingHours;
console.log(o, c);
*/

/*
const arr = [2, 3, 4]
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main,secondary);

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary)

[main, secondary] = [secondary, main];
console.log(main, secondary);

console.log(restaurant.order(2,0));

// Receive 2 returns values from a function
// const [starter, mainCourse] = restaurant.order(2,0);
// console.log(strater, mainCourse);

let nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);

const [p, q, r] = [8, 9]
*/

