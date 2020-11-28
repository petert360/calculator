 // Első lépés: az összes button elemen egy 'click' eseménykezelőt helyezek. A 'click' eseményre a gomb szövegének tartalma egy stringbe/tömbbe kerül, amit folyton bővítek a gombnyomásokra.
// Két gomb speciális funkcióval bír: az '=' kiértékeli a bevitt tartalmat, a 'C' törli a kijelzőt.
// A második feladat: ha van egy tetszőleges string/tömb báltozóm, ami a számológép elemeit tartalmazza, hogyan értékelhetem ki?


// Ez a függvény felel a kijelzőn megjelenő adatok feldolgozásáért
function parseFunction(displArr) {
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

// a feldolgozott adatokat ez e függvény számítja ki
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

let displayVar = '';
let displayArr = [];
let btnContent = '';

let btnElements = document.querySelectorAll('.calc__btn');
let displayElement = document.querySelector('.calc__display');
for (let i = 0; i < btnElements.length; i += 1) {
    btnElements[i].addEventListener('click', function (event) {
        // console.log(event.target.textContent);
        btnContent = event.target.textContent;
        if (btnContent === 'C') {
            displayVar = '';
            displayArr = [];
            displayElement.textContent = '';
        } else if (btnContent === '=') {
            displayElement.textContent = parseFunction(displayArr);
        }
        else {
            displayVar += event.target.textContent;
            displayArr.push(event.target.textContent);
            displayElement.textContent = displayVar;
            console.log(displayVar);
            console.log(displayArr);
        }
    })
}