'use strict';

(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';
})();

// const boardPassengers = function(n, wait) {
//     const perGroup = n / 3;
//
//     setTimeout(function() {
//         console.log(`We are now boarding all ${n} passengers`);
//         console.log(`There are 3 groups, each with ${perGroup} passengers`);
//     }, wait * 1000);
//
//     console.log(`Will start boarding in ${wait} seconds`);
// };
//
// const perGroup = 1000;
// boardPassengers(180, 3);


//
// let f;
// const g = function() {
//     const a = 23
//     f = function() {
//         console.log(a * 2)
//     }
// }
//
// const h = function() {
//     const b = 777;
//     f = function() {
//         console.log(b * 2)
//     }
// }
//
// g();
// f();
// console.dir(f);
// // Re-assigned f function
// h();
// f();
// console.dir(f);

// const secureBooking = function() {
//     let passengerCount = 0;
//
//     return function() {
//         passengerCount++;
//         console.log(`${passengerCount} passengers`);
//     }
// }
// const booker = secureBooking();
//
// booker();
// booker();
// booker();
//
// console.dir(booker);

// const runOnce = function() {
//     console.log('This will never run again');
// };
// runOnce();
//
// (function() {
//     console.log('This will never run again');
//
// })()
// {
//     const isPrivate = 23;
// }
// console.log(isPrivate);
//
// () => console.log('This will ALSO never run again')();

/*
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],

  //book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({flight: `${this.iataCode}${flightNum}, name`})
  },
}

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');
console.log(lufthansa)

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;
// Does NOT work
// book(23, 'Sarah Williams');

// Call method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

// Apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

// The same as Apply method in modern Javascript
book.call(swiss, ...flightData);

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Ophelie Bugnon');
bookEW23('Martha Cooper');

//With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVat = value => value + value * 0.23;

console.log(addVAT(100));

const addTaxRate = function(rate) {
  return function(value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));*/


/*const greet = function(greeting) {
  return function(name) {
    console.log(`${greeting} ${name}`);
  }
}

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Jonas');*/

/*//Challenge
const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Hi')('Jonas');*/

//First-class and Higher-Order functions

// const oneWord = function(str) {
//   return str.replace(/ /g, '').toLowerCase();
// };
//
// const upperFirstWord = function(str)  {
//   const[first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };
//
// const transformer = function(str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformer string: ${fn(str)}`);
//
//   console.log(`Transformed by: ${fn.name}`);
// };
//
// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);
//
// //Js uses callbacks all the time
// const high5 = function() {
//   console.log('Hello');
// }
//
// document.body.addEventListener('click',high5 );
// ['Jonas', 'Martha', 'Adam'].forEach(high5);

/*const bookings = [];

const createBooking = function(flightNum, numPassenger = 1, price = 199 + numPassenger) {

  // numPassenger = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum, numPassenger, price
  }
  console.log(booking);
  bookings.push(booking);
}

createBooking('LH123');
createBooking('LH123', 2);
createBooking('LH123', 5);*/

/*const flight = 'LH234';
const jonas =  {
  name: 'Jonas Schmedtmann',
  passport: 23554455,
}

const checkIn = function(flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if(passenger.passport === 23554455) {
    alert('Check In');
  } else {
    alert('Wrong passport!');
  };
}
//is the same as doing ...
/!*checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

const passenger = flight;
const flightNum = jonas;*!/

const newPassport = function(person) {
  person.passpoert = Math.random() * 10000001000;
}

newPassport(jonas);
checkIn(flight, jonas);*/

