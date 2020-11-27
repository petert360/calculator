// Első lépés: az összes button elemen egy 'click' eseménykezelőt helyezek. A 'click' eseményre a gomb szövegének tartalma egy stringbe/tömbbe kerül, amit folyton bővítek a gombnyomásokra.
// Két gomb speciális funkcióval bír: az '=' kiértékeli a bevitt tartalmat, a 'C' törli a kijelzőt.
// A második feladat: ha van egy tetszőleges string/tömb báltozóm, ami a számológép elemeit tartalmazza, hogyan értékelhetem ki?
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
        } else {
            displayVar += event.target.textContent;
            displayArr.push(event.target.textContent);
            displayElement.textContent = displayVar;
            console.log(displayVar);
            console.log(displayArr);
        }
    })
}