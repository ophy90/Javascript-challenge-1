'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

   const movs = sort ?  movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach( function (mov, i) {
  const type = mov > 0 ? 'deposit' : 'withdrawal';

  const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
      <div class="movements__value">${mov}</div>
    </div>
`;
  containerMovements.insertAdjacentHTML('afterbegin', html);
});
};

const calcDisplayBalance = function(acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0 );
  labelBalance.textContent = `${acc.balance} €`;
};
// console.log(calcDisplayBalance(account1));

const calcDisplaySummary = function(acc)
{
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes} €`;

  const outcomes = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc - mov, 0);
  labelSumOut.textContent = `${Math.abs(outcomes)} €`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}`
}

const createUserNames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUserNames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);
  // Display balance
  calcDisplayBalance(acc)
  // Display summary
  calcDisplaySummary(acc)
};

//Event handler
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  //Prevent form from submitting
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value);

  labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`

// Display UI and message
  if(currentAccount?.pin === Number(inputLoginPin.value)) {
    containerApp.style.opacity = 100;
    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    //Update UI
    updateUI(currentAccount);
  }
})

btnTransfer.addEventListener('click', function(e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);

  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    //Doing the transfer
  currentAccount.movements.push(-amount);
  receiverAcc.movements.push(amount);

  //Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function(e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if(amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    //Add movement
    currentAccount.movements.push(amount);

    //Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
})

btnClose.addEventListener('click', function(e) {
  e.preventDefault();
  if (inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin) {
    const index = accounts.findIndex(acc => acc.username === currentAccount.username);
    console.log(index);

    //Delete account
    accounts.splice(index,1);

    //Hide UI
    containerApp.style.opacity = 0;
    inputCloseUsername.value = inputClosePin.value = '';

  };
  let sorted = false;
  btnSort.addEventListener('click', function(e) {
    e.preventDefault();
    displayMovements(currentAccount.movements, !sorted);
    sorted = !sorted;
  })

})

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter(function (mov) {
  return mov > 0;
});


const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);


// const withdrawals = movements.filter(function (mov){
//   return mov <= 0;
// });
//
// console.log(withdrawals);

const withdrawals = movements.filter (mov => mov < 0);


//accumulator is like a SWOWBALL (total cumulé)
const balance = movements.reduce((acc, cur) => acc + cur
, 0);


let balance2 = 0;
for (const mov of movements) balance2 += mov;


// Maximum Value
const max =  movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0])

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

/*const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];*/

/////////////////////////////////////////////////

//
// //SLICE (ressemble à spread) -> (no index -> jusqu'à la fin)
// let arr = ['a', 'b', 'c', 'd', 'e' ];
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice(1, -2));
//
// //SPLICE (no index, nbre de caractères à mettre dans l'array)
// console.log(arr.splice(2));
// arr.splice(-1);
// console.log(arr);
//
// //REVERSE (it mutates the original array
// arr = ['a', 'b', 'c', 'd', 'e' ];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
//
// //concat (peut-être remplacé par spread operator)
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log(...arr, ...arr2);
//
// //Join
// console.log(letters.join(' - '));


// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//
for (const [i, movement] of movements.entries()) {
  if(movement > 0) {
    `Movement ${i + 1}. You deposited ${movement}`;
  } else {
    `Movement ${i + 1}. You withdrew ${Math.abs(movement)}`;
  };
}

// console.log('-------------forEach---------------');
movements.forEach(function(mov, i, arr) {
  if (mov > 0) {
    `Movement ${i + 1}. You deposited ${mov}`;
  } else {
    `Movement ${i + 1}. You withdrew ${Math.abs(mov)}`;
  };
});


// //Map
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);
//
// currencies.forEach(function(value, key, map) {
//   console.log(`${key}: ${value}`);
// });
//
// //Set
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function(value, _, map) {
//   console.log(`${value}: ${value}`);
// });

// const eurToUsd = 1.1;
//
// // const movementsUSD = movements.map(function (mov) {
// //   return mov * eurToUsd;
// // });
//
// const movementsUSD = movements.map(mov => mov * eurToUsd );
//
//
// console.log(movements);
// console.log(movementsUSD);
//
// const movementsUSDfor = [];
// for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
// console.log(movementsUSDfor);


// //PIPELINE
// const totalDepositsUsd = movements
//   .filter(mov => mov > 0)
//   .map((mov, i, arr) => {
//     console.log(arr);
//    return mov * eurToUsd;
// })
//   // .map(mov => mov * eurToUsd)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(totalDepositsUsd);
//

const firstWithdrawal = movements.find(mov => mov < 0);


const account = accounts.find(acc => acc.owner === 'Jessica Davis');

console.log(movements);

// //EQUALITY
// console.log(movements.includes(-130));
//
// //SOME :CONDITION
// console.log(movements.some(mov => mov === -130));
//
// //Is there any value that makes this condition true ?
// const anyDeposits = movements.some(mov => mov > 1500);
// console.log(anyDeposits);
//
// //EVERY
// console.log(movements.every(mov => mov > 0));
// console.log(account4.movements.every(mov => mov > 0));
//
// // Separate callback
// const deposit = mov => mov > 0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));

// const arr = [[1, 2, 3], [4, 5, 6], 7, 8 ];
// console.log(arr.flat());
//
// // flat avec level de deepeness (peut flatter plus de deux level d'array)
// const arrDeep = [[[1, 2, 3], [4, 5, 6]], 7, 8 ];
// console.log(arrDeep.flat(2));
//
// //flat
// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements)
// const allMovements = accountMovements.flat();
// console.log(allMovements);
// // const overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// // console.log(overalBalance);
//
//
// const overalBalance = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance);
//
// //flatMap -> only goes one level deep if you need more, you need the flat method
// const overalBalance2 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance2);

//String
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());
console.log(owners);

//Numbers -> sans indication, il convertis en strings et prend la 1ère
// valeur à la suite, comme si il triait par ordre alphabétique
console.log(movements);

//return O, A, B (keep order)
//return 0, B, A (switch order)
movements.sort((a, b) => a - b);
console.log(movements);


// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (b > a) return 1;
// });

movements.sort((a, b) => b - a);
console.log(movements);

const arr = [1, 2, 3];
console.log(new Array(1, 2, 3, 4, 5));

//Empty array + fill method
const x = new Array(7);
console.log(x);
// console.log(x.map(() => 5));

// x.fill(1);
x.fill(1, 3, 4)
console.log(x);

arr.fill(23, 2, 6);
console.log(arr);

// Array.from
const y = Array.from({length: 7}, () => 1);
console.log(y);

const z = Array.from({length: 7}, (cur, i) => i + 1);
console.log(z);

const movementsUI = Array.from(document.querySelectorAll('.movements_value'));
console.log(movementsUI);




