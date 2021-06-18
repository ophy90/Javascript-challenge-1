'use strict';
//
// function calculateAge(birthYear) {
//     const age = 2037 - birthYear;
//
//     function printAge() {
//        let printAgeOutput = `${firstName} You are ${age}, born in ${birthYear}`;
//        console.log(printAgeOutput);
//
//        if(birthYear >= 1981 && birthYear <= 1996) {
//            var millenial = true;
//            //Creating NEW variable with same name as outer scope's variable.
//            const firstName = 'Steven';
//            const str = `oh, and you're a millenial, ${firstName}`;
//            console.log(str);
//
//            function add(a,b) {
//                return a + b;
//            }
//            // Reassigning outer scope's variable
//            printAgeOutput = 'NEW OUTPUT';
//        }
//        // console.log(str)
//         console.log(millenial);
// /*        console.log(add(2,3));*/
//         console.log(printAgeOutput);
//     }
//
//     printAge();
//
//     return age;
// }
//
// const firstName = 'Jonas';
// calculateAge(1991);
/*var firstName = 'Matilda'

const jonas = {
    firstName: 'Jonas',
    year: 1991,
    calcAge: function() {
        // console.log(this);
        console.log(2037 - this.year);

        //Solution 1
        /!*const self = this; // self or that
        const isMillenial = function () {
            console.log(this);
            console.log(self.year >= 1981 && self.year <= 1996);
            // console.log(this.year >= 1981 && this.year <= 1996);
        }
        isMillenial()*!/

        //Solution 2
        const isMillenial = () => {
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996);
            // console.log(this.year >= 1981 && this.year <= 1996);
        }
        isMillenial()
    },
    greet: () => {
        console.log(this.firstName)
        console.log(`Hey ${this.firstName}`)
    }
};
jonas.greet();
jonas.calcAge();*/

//********************************
let age = 30;
let oldAge = age;
age = 31;

const me = {
    name: 'Jonas',
    age: 30,
};

const friend = me;
friend.age = 27;
console.log('Friends', friend);
console.log('Me', me);





