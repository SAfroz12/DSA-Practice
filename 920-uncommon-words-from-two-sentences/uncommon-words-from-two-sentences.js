/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
    let str1 = s1.split(" ");
    let str2 = s2.split(' ')
    let map1 = new Map();
    let map2 = new Map();
    let result = [];

    for (let ch of str1) {
        map1.set(ch, (map1.get(ch) || 0) + 1)
    }
    for (let ch of str2) {
        map2.set(ch, (map2.get(ch) || 0) + 1)
    }
    for (let ch of str1) {

        if (map1.get(ch) === 1 && !map2.has(ch)) {
            result.push(ch)
        }
    }
    for (let ch of str2) {
        if (map2.get(ch) === 1 && !map1.has(ch)) {
            result.push(ch)
        }
    }
    return result

};