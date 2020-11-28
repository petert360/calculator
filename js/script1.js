//btnElement változót hozom létre, amihez hozzárendelem a kijelzőt.
let displayElement = document.querySelector('.calc__display');

// for loop segítségével minden gombon létrehozok egy eventlistenert, ami btnContent változóba tárolja a gomb tartalmát, és a tartalomtól függően funkciót renelek hozzá:
// a "C" gomb rötli a kijelzőt
// az egyenlőségjel meghívja a bevitt kifejezést végrahajtó függvényt.
// minden egyéb gomb tartalma hozzáadódik egy akkumulátor változóhoz aminek a tartakme megjelenik a kijelzőn


function parseExpression(str) {
    let numArr = str.split(/[-,+,x,÷]/).filter(Boolean); // regular expression segítségével kiveszem a számokat
    let strArr = str.split(/([-,+,x,÷])/).filter(Boolean); // regular expression segítségével tömbre alakítim a stringet
    let opArr = strArr.filter(function (e) {               // a teljes tömbböl kiszűröm az operátorokat
        if (e === '-' || e === '+' || e === 'x' || e === '÷') {
            return true;
        }
    })
    console.log(numArr);
    console.log(opArr);
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

let displayVar = '';
let btnContent = '';
let btnElements = document.querySelectorAll('.calc__btn');
for (let i = 0; i < btnElements.length; i += 1) {
    btnElements[i].addEventListener('click', function (event) {
        btnContent = event.target.textContent;
        if (btnContent === 'C') {
            displayVar = '';
            displayElement.textContent = '';
        } else if (btnContent === '=') {
            parsedArrays = parseExpression(displayVar);
            // if (checkArraysForError(parsedArrays)) {
            //     displayVar = 'Error'
            // };
            console.log(parsedArrays);
        }
        else {
            displayVar += event.target.textContent;
            displayElement.textContent = displayVar;
        }
    })
}