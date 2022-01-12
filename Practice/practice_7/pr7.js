// task_1
class MyString {
     // методы класса
    constructor(zu) {
        this.zu = zu;
    }
    reverse(zu) {
        if (typeof zu !== 'string') {
            return 'error';
        } else {
            return zu.split("").reverse().join("");
        }
    }
    ucFirst(zu) {
        if (typeof zu !== 'string') {
            return 'error';
        } else {
            return (zu[0].toUpperCase() + zu.slice(1));
        }
    }
    ucWords(zu) {
        let result = '';
        if (typeof zu !== 'string') {
            return 'error';
        } else {
            for (let i = 0; i < zu.length; i++)
                if (zu[i] === zu[0].toLowerCase()) {
                    result += zu[0].toUpperCase();
                } else if (zu[i - 1] === ' ') {
                    result += zu[i].toUpperCase();
                } else result += zu[i];
            return result;
        }
    }
}

const str = new MyString();
console.log(str.reverse('abcde')); //выведет 'edcba'
console.log(str.ucFirst('abcde')); //выведет 'Abcde'
console.log(str.ucWords('abcde abcde abcde')); //выведет 'Abcde Abcde Abcde'


// task_2
class Validator {
    // методы класса
    constructor(imp) {
        this.imp = imp;
    }
     isEmail(imp) {
         let regexp = /@/i;
        return regexp.test(imp);
    }
    isDomain(imp) {
      let regexp = /\$.ua \$.net\$.biz\$.com\$.edu\$.gov\$.info\$.mil\$.movie\$.museum\$.net\$.org\$.pro\$.tv\$.name\$.club\$.xyz\$.center/i;
        return regexp.test(imp);
    }
     isDate(imp) {
     let regexp = /\d\d/g;
         return regexp.test(imp);
    }

    isPhone(imp) {
        let regexp = /^(\+380)/i;
        return regexp.test(imp);
    }
}

let validator = new Validator();

console.log(validator.isEmail('phphtml@mail.ru'));
console.log(validator.isDomain('phphtml.biz'));
 console.log(validator.isDate('12.05.2020'));
console.log(validator.isPhone('+380 (29) 817-68-92'));