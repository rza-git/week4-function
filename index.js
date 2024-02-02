// Array

let numbers = [5, 2, 1, 3, 4];
// --------->  0  1  2  3  4

// Looping

// for loop, while loop, do while

// FOR LOOP

// for(deklarasi variable; conditional; iterasi)



let triangle = 5;

//  ------------> 5x
// for(let i = 0; i < triangle; i++) {
//     let result = "";
//     for(let j = 0; j <= i; j++) {
       
//         result += "*"
//     }
//     console.log(result)
// }

// console.log("================================")

// ------> 5, 4, 3, 2, 1
// for(let i = triangle; i > 0; i--) {
//     let result = ""
//     // i =5
//     for(let j = 0; j < i; j++) {
//         result += "*"
//     }

//     console.log(result)
// }

// console.log("================================")

let box = 5;

// for(let i = 0; i < box; i++) {
//     let result = ""

//     for(let j = 0; j < box; j++) {
//         result += "*"
//     }
//     console.log(result, "============> i=", i);
// }

console.log("================================")

// for(let i = 0; i < box; i++) {
//     let result = ""

//     for(let j = 0; j < box; j++) {
//        // 0, 1, 2, 3, 4
//         if(i === 0 || i === (box - 1) || (j === 0) || (j === box - 1)) {
//             result += "*"
//         } else {
//             result += " "
//         }
        
//     }
//     console.log(result, ">>>>>>>>>> i = ", i)
// }


// WHILE LOOP
// while(boolean expression / conditional)

// let healthBar = 100;
// let damage = 10;
// console.log("Health= ", healthBar)
// while(healthBar > 0) {
//     healthBar -= damage
//     console.log("Health= ", healthBar)
// }



// DO WHILE
// DO {} WHILE(KONDISIONAL);

// let healthBar = 100;
// let damage = 10
// do {
//  healthBar -= damage
//  console.log("Health= ", healthBar)
// }while(healthBar > 0)

// console.log("DIED")


let arrayNumbers = ["mango", "banana", "pineapple", "apple", "strawberry"]

for(let i = 0; i < arrayNumbers.length; i++) {
    
    if(arrayNumbers[i] === "apple") {
        console.log("Found apple at index: ", i)
    }
}

console.log("================================")

// ES5 Syntax

let firstNumber = 10;
let secondNumber = 5;

// function simpleCalc(x, y, operator) {
//     let result = 0;

//     if(operator === "+") {
//         result = x + y;
//     } else if(operator === "-") {
//         result = x - y
//     } else if(operator === "x") {
//         result = x * y;
//     } else if(operator === "/") {
//         result = x / y
//     } else {
//         console.log("undefined")
//     }

//     return result;
// }



// ES6 syntax ==> Arrow function

const simpleCalc = (x, y, operator) => {
    let result = 0;

    if(operator === "+") {
        result = x + y;
    } else if(operator === "-") {
        result = x - y
    } else if(operator === "x") {
        result = x * y;
    } else if(operator === "/") {
        result = x / y
    } else {
        console.log("undefined")
    }

    return result;
}

console.log(simpleCalc(firstNumber, secondNumber, "+"));
console.log(simpleCalc(firstNumber, secondNumber, "-"));
console.log(simpleCalc(firstNumber, secondNumber, "x"));
console.log(simpleCalc(firstNumber, secondNumber, "/"));

console.log("================================")

// 0 -> 0.99999999
// 1 -> 11


// 5.9  --> 5
// 5.3  --> 5

let arrayFruits = ["mango", "banana", "pineapple", "apple", "strawberry"]

for(const fruit of arrayFruits) {
    console.log(fruit)
}

let character = {
    healthBar: 100,
    type: "Warrior",
    skill: "frenzy"
}

for(const property in character) {
    console.log(character[property])
}
