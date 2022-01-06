function counterNumber(){
    let sum = 0;
    let score = 0;

    for (let i = 1; i <= 99; i++){
        if ( i%2 === 0){
            sum = sum + i;
            score ++;
        }
    }
    return (sum + `, ` + score);
}

module.exports = counterNumber;


