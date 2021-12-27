let min_box = document.getElementById("min-box");
let max_box = document.getElementById("max-box");
let allGuessNum = [];

// let buttonGenerate = document.getElementById("generate");
// buttonGenerate.onclick = random();

// let all_guesses = document.getElementById("all-guesses");

function random() {

    let min = Number(min_box.value);
    let max = Number(max_box.value);
    let rangeVal = max - min + 1;

    let ranNum = Math.floor((Math.random() * rangeVal + min));

    while (allGuessNum.includes(ranNum)) {
        ranNum++;

        if (ranNum > max) {
            ranNum = min;
        }
    }
    allGuessNum.push(ranNum);
    document.getElementById('all-guesses').innerHTML = ranNum;

    if (allGuessNum.length === rangeVal) {
        document.getElementById('generate').disabled = true;
        document.getElementById('all-guesses').innerHTML = 'Цифры закончились!';
    }

    if ((max <= min) || (isNaN(min)) && (isNaN(max))) {
        alert('Ты всё сломал!');
        document.getElementById('generate').disabled = true;
        document.getElementById('all-guesses').innerHTML = '';
    }

}


document.getElementById("reset").onclick = function reset() {
    window.location.reload();
}

//не знаю почему не выводит одно из чисел заданного диапазона
//как то нужно пофиксить NaN

// function random() {
//     let min = Number(min_box.value);
//     let max = Number(max_box.value);
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     let ranNum = Math.floor(Math.random() * (max - min + 1)) + min;
//     let arrRandom = [];
//     arrRandom.unshift(ranNum);
//     console.log(arrRandom);
//     if (arrRandom.includes(ranNum)) {
//         for (; min <= max; min++) {
//             let rN = Math.floor(Math.random() * (max - min + 1)) + min;
//             return rN;
//         }
//
//     }

/*
for (; min <= max; min++) {

    let ranNum = Math.floor(Math.random() * (max - min + 1)) + min;
    let arrRandom = [];
    arrRandom.unshift(ranNum);
    console.log(arrRandom)
}*/
