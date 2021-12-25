function annOrNot(astr, strb) {
    if (astr.length !== strb.length) {
        return false;
    }
    if (astr === strb) {
        return true;
    }
    a = astr.split('').sort();
    b = strb.split('').sort();
    for (i = 0; i < astr.length; i++) {
        if (a[i] === b[i]) {
            return true;
        } else {
            return false;
        }
    }
}



module.exports = annOrNot;