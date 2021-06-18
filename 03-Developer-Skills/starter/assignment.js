/*
Coding Challenge #1
Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Your tasks:
    1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!
    Test data:
    § Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]
GOOD LUCK 😀*/

// 1.Create printForecast
// 2. Loop the temparatures
// 3. add the text to a string
// 4. change text if 1 day -> not days

let temperatures = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
    let forecast = " ";
    for (let i = 0; i < arr.length; i++) {
        console.log(`I enter the loop ${i + 1}`)
        if (i === 0) {
            forecast += arr[i] + `°C today... `;
        } else {
            forecast += arr[i] + `°C in ${i} days... `;
        };
    };
    return console.log(forecast);
};
printForecast(temperatures)