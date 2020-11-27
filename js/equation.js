const displayArr = ['1', '2', 'x', '3', '4', '+', '1']; //12x34+1
let numArr = [];
let numString = [];
let operatorArr = [];

for (let i = 0; i < displayArr.length; i += 1) {
    if (displayArr[i] === '+' || displayArr[i] === '-' || displayArr[i] === 'x' || displayArr[i] === '/') {
        operatorArr.push(displayArr[i]);
        numArr.push(numString);
        numString = '';
    } else {
        numString += displayArr[i];
    }
}
numArr.push(numString);
console.log(operatorArr);
console.log(numArr);
