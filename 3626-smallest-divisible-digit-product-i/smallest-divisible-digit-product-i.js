/**
 * @param {number} n
 * @param {number} t
 * @return {number}
 */
var smallestNumber = function (n, t) {
    let product = 1;
    let q = n;
    while (product !== 0) {
        let digits = q % 10;
        product *= digits;
        if (product % t === 0) {
            return n
        }
        q = Math.floor(q / 10);
        if (q===0 ){
            product=1;
            n++;
            q=n;
        }

    }
};