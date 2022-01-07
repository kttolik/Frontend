let min_box = document.getElementById("min-box");
let max_box = document.getElementById("max-box");
let allGuessNum = [];


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


//как то нужно пофиксить NaN

