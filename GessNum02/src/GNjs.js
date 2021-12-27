let btn_check = document.getElementById("check");
let btn_hellLevell = document.getElementById("change");
btn_hellLevell.onclick = hellLevel;

let guess_box = document.getElementById("guess-box");
let all_guesses = document.getElementById("all-guesses");
let hotCold = document.getElementById("hotCold");
let loose = document.getElementById("loose");

let minVal = 0;
let maxVal = 100;

document.getElementById('min-text').innerHTML = `${minVal}`;
document.getElementById('max-text').innerHTML = `${maxVal}`;
// document.getElementById('count-guess-text').innerHTML = `${maxVal}`;

let random_num = Math.round(Math.random() * (maxVal -  minVal + 1)) + 1;
console.log(random_num);
let count_guess = 1;

function checkGuess() {
    let your_guess = Number(guess_box.value);

    if (your_guess > maxVal || your_guess < minVal ) {
        alert('Число вышло за диапазон видимости волшебного шара! Это неугодное число! Попробуй другое!!');
    } else {

        if (count_guess < 5) {
            if (your_guess < random_num) {
                all_guesses.textContent += your_guess + " ";
                hotCold.textContent = `Не угадал, холоднее... Осталось ${count_guess} попыток`;
                hotCold.classList.add("wrong");
                count_guess++;
                guess_box.value = '';
            } else if (your_guess > random_num) {
                all_guesses.textContent += your_guess + " ";
                hotCold.textContent = `Не угадал, но теплее!!! Осталось ${count_guess} попыток`;
                hotCold.classList.add("wrong");
                count_guess++;
                guess_box.value = '';
            } else {
                all_guesses.textContent += your_guess + " ";
                hotCold.textContent = `Поздравляю! Ты угадал задуманное число за  ${count_guess} попыток`;
                hotCold.classList.add("success");
                guess_box.value = '';
                gameOver();
            }
        } else {
            all_guesses.textContent += your_guess + " ";
            loose.textContent = `Ты не угадал и был пожран древним богом!`;
            hotCold.classList.add("wrong");
            guess_box.value = '';
            gameOver();
        }
    }
}




function gameOver() {
    btn_check.disabled = true;
    guess_box.disabled = true;
}

function hellLevel() {
    alert('Адский уровень активирован БА-ХА-ХА! Молитесь смертные!')
    maxVal = 200;
    console.log(random_num);

}
