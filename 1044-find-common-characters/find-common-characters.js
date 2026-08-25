/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
    let minfreq = new Array(26).fill(Infinity);
    for (let ch of words) {
        let freq = new Array(26).fill(0);
        for (let letter of ch) {
            freq[letter.charCodeAt(0) - 97]++
        }

        for (let i = 0; i < 26; i++) {
            minfreq[i] = Math.min(minfreq[i], freq[i]);
        }
    }

    let result = [];
    for (let i = 0; i < 26; i++) {
     while(minfreq[i]>0){
        result.push(String.fromCharCode(i+97))
        minfreq[i]--
     }
    }
    return result
};