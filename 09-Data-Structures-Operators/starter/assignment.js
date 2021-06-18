/*
let gk1 = 'Neuer'
let fieldPlayers1 = ['Pavard', 'Martinez', 'Alaba', 'Davies', 'Kimmich', 'Goretzka', 'Coman', 'Muller', 'Gnarby', 'Lewandowski'];
const players1 = [gk1, ...fieldPlayers1];
const substitutes1 = ['Thiago', 'Coutinho', 'Perisic'];
const players1Final = [...players1, ...substitutes1];
console.log(players1Final);


let gk2 = 'Burki';
let fieldPlayers2 = ['Schulz', 'Hummels', 'Akanji', 'Hakimi', 'Weigl', 'Witsel', 'Hazard', 'Brandt', 'Sancho', 'Gotze'];
const players2 = [gk2, ...fieldPlayers2];
console.log(players2);

const allPlayers = [gk1, ...fieldPlayers1, gk2, ...fieldPlayers2];
console.log(allPlayers);

const team1 = 1.33;
const team2 = 3.25;
const draw  = 6.5;

const printGoals = function (...players) {
    console.log(players);
    console.log(`${players.length} goals were scored`);
};

printGoals();*/

/*
Coding Challenge #4
Write a program that receives a list of variable names written in underscore_case
and convert them to camelCase.
    The input will come from a textarea inserted into the DOM (see code below to
insert the elements), and conversion will happen when the button is pressed.
    Test data (pasted to textarea, including spaces):
underscore_case
first_name
Some_Variable
calculate_AGE
delayed_departure
Should produce this output (5 separate console.log outputs):
underscoreCase
firstName ✅
✅✅
someVariable
calculateAge ✅✅✅
✅✅✅✅
delayedDeparture ✅✅✅✅✅
Hints:
    § Remember which character defines a new line in the textarea 😉
§ The solution only needs to work for a variable made out of 2 words, like a_b
§ Start without worrying about the ✅. Tackle that only after you have the variable
name conversion working 😉
§
This challenge is difficult on purpose, so start watching the solution in case
you're stuck. Then pause and continue!
Afterwards, test with your own test data!
    GOOD LUCK 😀
*/
// Code challenge 4
/*
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function() {
    let text = document.querySelector('textarea').value;
    let rows = text.split('\n');
    for(const [i, row] of rows.entries()) {
        const [first, second] = row.toLowerCase().split('_');
        console.log(row, first, second)
        const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
        console.log(`${output.padEnd(20, ' ')}${'✅'.repeat(i + 1)}`);
    };
});*/

/*
underscore_case
first_name
Some_Variable
calculate_AGE
delayed_departure
*/
