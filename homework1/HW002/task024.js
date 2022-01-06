function SqRtBinary(sqr)
{
    let min = 1;
    let max = sqr;
    let pr = 0;
    for (;;)
    {
        let center = Math.round( (min + max) / 2);

        if (pr == center)
            return center;
        let q = center * center;
        if (sqr == q)
            return center;
        if (sqr < q)
            max = center;
        else
            min = center;
        pr = center;
    }
}


module.exports = SqRtBinary;


