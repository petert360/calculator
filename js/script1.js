//btnElement változót hozom létre, amihez hozzárendelem a kijelzőt.
let displayElement = document.querySelector('.calc__display');

function parseExpression(str) {
    let numArr = str.split(/[-,+,x,÷]/).filter(Boolean); // regular expression segítségével kiveszem a számokat
    let strArr = str.split(/([-,+,x,÷])/).filter(Boolean); // regular expression segítségével tömbre alakítim a stringet
    let opArr = strArr.filter(function (e) {               // a teljes tömbböl kiszűröm az operátorokat
        if (e === '-' || e === '+' || e === 'x' || e === '÷') {
            return true;
        }
    })
    return [numArr,
        opArr
    ];
    //let opArr = str.split(/[0,1,2,3,4,5,6,7,8,9,.]/).filter(Boolean); //ezzel nem sikerült pontosan kiemelni az operátorokat
}

function checkArraysForError(arr) {
    if (arr[0].length <= arr[1].length) { // HIBA, ha több, vagy egyenő az operátorok száma, mint a számoké
        return true;
    }
    return false;
}

function setDisplay(variable, display) {
    displayVar = variable;
    displayElement.textContent = display;
}


function calculate(parsedArrays) {  //parsedArrays[0] a számokat [1] az operátorokat tartalmazza
    let nums = parsedArrays[0];
    let ops = parsedArrays[1];
    let result = Number(nums[0]);
    for (let i = 1; i <= ops.length; i += 1) {
        if (ops[i - 1] === '+') {
            result = result + Number(nums[i]);
        } else if (ops[i - 1] === '-') {
            result = result - Number(nums[i]);
        } else if (ops[i - 1] === 'x') {
            result = result * Number(nums[i]);
        } else if (ops[i - 1] === '÷') {
            result = result / Number(nums[i]);
        }
    } return result;
}




// for loop segítségével minden gombon létrehozok egy eventlistenert, ami btnContent változóba tárolja a gomb tartalmát, és a tartalomtól függően funkciót renelek hozzá:
// a "C" gomb törli a kijelzőt
// az egyenlőségjel meghívja a bevitt kifejezést végrahajtó függvényt.
// minden egyéb gomb tartalma hozzáadódik egy akkumulátor változóhoz aminek a tartalma megjelenik a kijelzőn

let displayVar = '';
let btnContent = '';
let btnElements = document.querySelectorAll('.calc__btn');
for (let i = 0; i < btnElements.length; i += 1) {
    btnElements[i].addEventListener('click', function (event) {
        btnContent = event.target.textContent;
        if (btnContent === 'C') {
            setDisplay('', '');
        } else if (btnContent === '=') {
            parsedArrays = parseExpression(displayVar);
            if (checkArraysForError(parsedArrays)) {
                setDisplay('', 'Error');
            } else {
                setDisplay(calculate(parsedArrays), calculate(parsedArrays))
            }
        }
        else {
            displayVar += event.target.textContent;
            displayElement.textContent = displayVar;
        }
    })
}