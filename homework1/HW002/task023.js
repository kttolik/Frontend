function SqRtSeq(sqr) {
    for (let i = 1; ; i++) {
        let q = i * i;
        if (sqr === q)
            return i;
        if (sqr < q)
            return i - 1;
    }
}
    module.exports = SqRtSeq;

