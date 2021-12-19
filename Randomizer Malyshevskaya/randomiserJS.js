let min_box = document.getElementById("min-box");
let max_box = document.getElementById("max-box");

let buttonGenerate = document.getElementById("generate")
buttonGenerate.onclick = random(min, max);

let all_guesses = document.getElementById("all-guesses");



function random() {
    let min = Number(min_box.value);
    let max = Number(max_box.value);
    for (; min <= max; min++) {
        min = Math.ceil(min);
        max = Math.floor(max);
        let ranNum = Math.floor(Math.random() * (max - min + 1)) + min;
        alert(ranNum);
        let arrRandom = [];
        arrRandom.unshift(ranNum);

    }
}
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
//     alert('YO@')
//     }




/*
for (; min <= max; min++) {

    let ranNum = Math.floor(Math.random() * (max - min + 1)) + min;
    let arrRandom = [];
    arrRandom.unshift(ranNum);
    console.log(arrRandom)
}*/
