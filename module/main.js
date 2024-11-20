// main.js

// the following fuctions have been loaded to this main file
const f = require('./functions');

//please look at functions.js and observe the inputs that being asked to use then enter them and check if expected results were given



/*Find a function that takes one of the other functions is output and use that output to enter it as a function is input.

for example lets say we have function s
*
sell(money) =>{return money * 5}
moneyMade(sold) => {return 20 * sold}
****
This function returns some number so I can use that output in such manner

moneyMade(sell(10))

do something like this.

*/
console.log(f.add(3,87))

console.log(f.subtract(123,44))

console.log(f.multiply(45,32,0,89,100))

console.log(f.divide(99,8))

let king = [30,555,2,99,68,72,4,10,72,67,8]
console.log(f.sort(king))

let million = ["Tamesha","Sanita","Safena","Prya","Ashley","Shakeel","Adriel","Alexis","Najma,"]
console.log(f.sortAlphabetically(million))

let mice = ["FISH","PIG","QUEEN","SANKE"]
console.log(f.toLowerCaseList(mice))
console.log(f.sortByLength(mice))
console.log(f.convertNamesToLengths(mice))
console.log(f.processStudentNames(mice))
console.log(f.sortAlphabetically(mice))



