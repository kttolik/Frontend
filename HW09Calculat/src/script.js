let a = '';
let b = '';
let sign = '';
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'X', '/','xY', 'x²','x³', 'log', 'In', 'n!', 'P', '1x', 'exp', 'π', '1/ₓ', 'mod', '|x|', '%', '+/-'];

//Монитор

const out = document.querySelector('.calcIngen-screen p');

function clearAll(){
    a = '';
    b = '';
    sign = '';
    finish = false;
    out.textContent = 0;
}

const  ac = document.querySelector('.ac')
ac.addEventListener('click', clearAll)
//
// const zu = document.getElementById('all-btn');
// zu.addEventListener('click', (event) => {
//     console.log(event);
// });


let buttons = document.querySelector('.calculator-engin__buttons')
buttons.addEventListener('click', event => {
    //Нажата не кнопка
    if(!event.target.classList.contains('btn')) return;
    //Нажата кнопка clearAll
    if(event.target.classList.contains('ac')) return;

    out.textContent = '';
    const key = event.target.textContent

    if(digit.includes(key)){
        if(b === '' && sign === ''){
            a = a + key
            console.log(a)
            out.textContent = a;
        }
        else if (a !== '' && b !== '' && finish){
            b = key;
            finish = false;
            out.textContent = b
        }
        else{
            b = b + key
            out.textContent = b
        }
        console.log(a, b, sign)
        return
    }

    if(action.includes(key)){
        sign = key
        out.textContent = sign;
        console.log(sign)
        return
    }


    if(key === '='){
        if (b === '') b = a
        switch(sign){
            case "+":
                a = (+a) + (+b);
                break;
            case "-":
                a = a - b;
                break
            case "X":
                a = a * b;
                break
            case "/":
                if(b === '0'){
                    out.textContent = 'Ошибка'
                    a = '';
                    b = '';
                    sign = ''
                    return
                }
                a = a / b;
                break
            case "xY":
                a = Math.pow(a, b);
                break;
            case 'x²':
                a = Math.pow(a, 2)
                break;
            case 'x³':
                a = Math.pow(a, 3);
                break;
            case 'log':
                a = Math.log10(a)
                break;
            case 'ln':
                a = Math.log(a)
                break;
            case 'EE':
                a = Math.pow(a, 5)
                break;
            case 'P':
                a = Math.PI
                break;
            case 'exp':
                a = Math.exp(a)
                break;
            case "%":
                a = a / 100;
                break
            case "+/-":
                a = a * (-1);
                break
        }
        finish = true
        out.textContent = a
    }


})
