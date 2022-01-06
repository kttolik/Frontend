function yousRating (r) {
    if (r > 0 && r <= 19) {
        return ('score F');
    } else if (r > 19 && r <= 39) {
        return ('score E');
    } else if (r >= 40 && r <= 59) {
        return ('score D');
    } else if (r >= 60 && r <= 74) {
        return ('score C');
    } else if (r >= 75 && r <= 89) {
        return ('score B');
    } else if (r > 89) {
        return ('score A');
    } else if (r == ' ' || r == null) {
        return ('error');
    }
}

module.exports = yousRating;
