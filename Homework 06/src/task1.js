function getCookingTime (eggsAmount) {
    let result;
    if (typeof eggsAmount !== 'number' || eggsAmount < 0 || eggsAmount === '') {
        return false;
    }
    if (eggsAmount === 0) {
        return result = 0;
    } else {
        result = Math.ceil(eggsAmount / 5) * 5;
    }
    return result;
}

module.exports = getCookingTime;
