//btnElement változót hozom létre, amihez hozzárendelem a kijelzőt.
let displayElement = document.querySelector('.calc__display');

// for loop segítségével minden gombon létrehozok egy eventlistenert, ami btnContent változóba tárolja a gomb tartalmát, és a tartalomtól függően funkciót renelek hozzá:
// a "C" gomb rötli a kijelzőt
// az egyenlőségjel meghívja a bevitt kifejezést végrahajtó függvényt.
// minden egyéb gomb tartalma hozzáadódik egy akkumulátor változóhoz aminek a tartakme megjelenik a kijelzőn


function parseExpression(str) {
    let numArr = str.split(/[-,+,x,÷]/); // regular expression segítségével
    let opArr = str.split(/[0,1,2,3,4,5,6,7,8,9,.]/).filter(Boolean);
    if (numArr.length <= opArr.length) { // HIBA, ha több, vagy egyenő az operátorok száma, mint a számoké
        return 'Error'
    } else {
        return [numArr,
            opArr
        ];
    }
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
            if (checkArraysForError(parsedArrays)) {
                displayVar = 'Error'
            };
            console.log(parsedArrays);
        }
        else {
            displayVar += event.target.textContent;
            displayElement.textContent = displayVar;
        }
    })
}