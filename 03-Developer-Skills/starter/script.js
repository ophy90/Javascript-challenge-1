/*
// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const temparatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
 // What is temp amplitude? Answer: difference between highest and lowest temp
 // How to compute max an min temperatures ?
 // What's a sensor error? And what to do ?
 // 2) Breaking up into sub-problems
  // - How to ignore errors ?
  //  - Finx max value in temps array
  //  - Finx min value in temps array
  //  - Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
    let max = temps[0]
    let min = temps[0]
    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i]
        if (typeof curTemp !== 'number') continue
        if (curTemp > max) max = temps[i];
        if (curTemp< min) min = temps[i];
    };
    console.log(max, min)
    return max - min
};
const amplitude = calcTempAmplitude(temparatures)
console.log(amplitude)

//!*************************
const calcTempAmplitudeNew = function (t1, t2) {
    const temps = t1.concat(t2);
    console.log(temps)

    let max = temps[0]
    let min = temps[0]
    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i]
        if (typeof curTemp !== 'number') continue
        if (curTemp > max) max = temps[i];
        if (curTemp< min) min = temps[i];
    };
    console.log(max, min);
    return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([1, 5, -4], [3, 8, -5]);
console.log(amplitudeNew);
*/
