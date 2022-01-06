function inumberPrim(zu) {
    for(let i = 2; i < zu; i++)
        if(zu % i === 0) {
            return false;
        } else {
            return true;
        }
}

module.exports = inumberPrim;



