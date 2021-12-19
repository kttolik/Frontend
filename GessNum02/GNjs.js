
alert('Привет, я загадал число от min до max вашего диапазона. Попробуй угадать его за x попыток!');



let btn_check = document.getElementById("check");
let btn_hellLevell = document.getElementById("change");
btn_hellLevell.onclick = hellLevel;

let guess_box = document.getElementById("guess-box");
let all_guesses = document.getElementById("all-guesses");
let hotCold = document.getElementById("hotCold");
let loose = document.getElementById("loose");

let random_num = Math.floor(Math.random() * 100) + 1;

let count_guess = 1;

function hellLevel() {
    random_num = Math.floor(Math.random() * 200) + 1;
    count_guess = 15;
}

function checkGuess() {
    let your_guess = Number(guess_box.value);
    if (your_guess == Number || your_guess === ',' || your_guess === '!' || your_guess === ':'
        || your_guess === '-' || your_guess === '?' ||  your_guess === '.' ||  your_guess === ' ' ) {
        alert('Неверное значение!');
    }
    if (count_guess <= 4) {
        if (your_guess < random_num) {
            all_guesses.textContent += your_guess + " ";
            hotCold.textContent = `Не угадал, холоднее... Осталось ${count_guess} попыток`;
            hotCold.classList.add("wrong");
            count_guess++;
            guess_box.value = '';
        }
        else if (your_guess > random_num) {
            all_guesses.textContent += your_guess + " ";
            hotCold.textContent = `Не угадал, но теплее!!! Осталось ${count_guess} попыток`;
            hotCold.classList.add("wrong");
            count_guess++;
            guess_box.value = '';
        }
        else {
            all_guesses.textContent += your_guess + " ";
            hotCold.textContent = `Поздравляю! Ты угадал задуманное число за  ${count_guess} попыток`;
            hotCold.classList.add("success");
            guess_box.value = '';
            gameOver();
        }
    }
    else {
        all_guesses.textContent += your_guess + " ";
        loose.textContent = `Ты не угадал и был пожран древним богом!`;
        hotCold.classList.add("wrong");
        guess_box.value = '';
        gameOver();
        }
}

function gameOver() {
    btn_check.disabled = true;
    guess_box.disabled = true;
}

