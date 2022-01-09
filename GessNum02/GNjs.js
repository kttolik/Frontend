const btn_check = document.getElementById("check");
const btn_hellLevell = document.getElementById("change");
btn_hellLevell.onclick = hellLevel;

const guess_box = document.getElementById("guess-box");
const all_guesses = document.getElementById("all-guesses");
const hotCold = document.getElementById("hotCold");
const loose = document.getElementById("loose");

let minVal = 0;
let maxVal = 100;

document.getElementById('min-text').innerHTML = `${minVal}`;
document.getElementById('max-text').innerHTML = `${maxVal}`;
// document.getElementById('count-guess-text').innerHTML = `${maxVal}`;

let random_num = Math.round(Math.random() * (maxVal -  minVal + 1)) + 1;
console.log(random_num);
let count_guess = 1;
let guess = 5;

function checkGuess() {
    let your_guess = Number(guess_box.value);

    if (your_guess > maxVal || your_guess < minVal ) {
        alert('Число вышло за диапазон видимости волшебного шара! Это неугодное число! Попробуй другое!!');
    } else {

        if (count_guess < guess) {
            if (your_guess < random_num) {
                all_guesses.textContent += your_guess + " ";
                hotCold.textContent = `Не угадал, холоднее... Осталось ${guess - count_guess} попыток`;
                hotCold.classList.add("wrong");
                count_guess++;
                guess_box.value = '';
            } else if (your_guess > random_num) {
                all_guesses.textContent += your_guess + " ";
                hotCold.textContent = `Не угадал, но теплее!!! Осталось ${guess -count_guess} попыток`;
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
    guess = 15;

}