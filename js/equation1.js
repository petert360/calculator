function parseFunction(displarr){
let numArr = []; //számokat tartalmazó tömb
let operatorArr = []; // operátorokat tartalmazó tömb
let numString = []; //stringet tároló átmeneti változó - akkumulátor
let lastValIsOperator = true;

for (let i = 0; i < displayArr.length; i += 1) {
    if (displayArr[i] === '+' || displayArr[i] === '-' || displayArr[i] === 'x' || displayArr[i] === '/') {
        if (lastValIsOperator) {
            operatorArr.push(displayArr[i]);
            console.log('Hiba - rosszul megadott operátor');
        } else {
            operatorArr.push(displayArr[i]);
            numArr.push(numString);
            numString = '';
            lastValIsOperator = true;
        }
    } else {
        numString += displayArr[i];
        lastValIsOperator = false;
    }
}
if (numString !== '') {
    numArr.push(numString);  // az utolsó opertátor után akkumulált szám tárolása a tömbben
    lastValIsOperator = false;
}
if (numArr.length <= operatorArr.length) {
    console.log('Hiba - az operátorok száma több, vagy egyenlő, mint a számoké');
}
console.log(displayArr);
console.log(operatorArr);
console.log(numArr);
return calculate(numArr, operatorArr);
}


function calculate(numArr, operatorArr) {
    let result = parseInt(numArr[0]);
    for (let i = 1; i <= operatorArr.length; i += 1) {
        if (operatorArr[i - 1] === '+') {
            result = result + parseInt(numArr[i]);
        } else if (operatorArr[i - 1] === '-') {
            result = result - parseInt(numArr[i]);
        } else if (operatorArr[i - 1] === 'x') {
            result = result * parseInt(numArr[i]);
        } else if (operatorArr[i - 1] === '/') {
            result = result / parseInt(numArr[i]);
        }
    } return result;
}

const displayArr = ['4', 'x', '2', '+', '1'];
console.log(parseFunction(displayArr));