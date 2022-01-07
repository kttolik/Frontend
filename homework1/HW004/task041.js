function dayWeek(fist) {
        if (fist == 1) {
       return 'Понедельник!';
    } else if (fist == 2) {
        return 'Вторник!';
    } else if (fist == 3) {
        return 'Среда!';
    } else if (fist == 4) {
        return 'Четверг!';
    } else if (fist == 5) {
        return 'Пятница!';
    } else if (fist == 6) {
        return 'Суббота!';
    } else if (fist == 7) {
        return 'Воскресенье!';
    } else {
        return 'Некорректное число!';
    }
}

module.exports = dayWeek;


