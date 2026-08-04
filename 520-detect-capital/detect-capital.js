/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {

    // USA - if caps ===usa.length  -- true
    //usa - if lows == usa.length = true
    //Usa - if caps ==1 && smallest==usa.length-1



    let Smallcount = 0
    let Capcount = 0;

    if (/[A-Z]/.test(word[0])) {
        Capcount = Capcount + 1
    }
    else {
        Smallcount = Smallcount + 1
    }
    for (let i = 1; i < word.length; i++) {
        if (/[A-Z]/.test(word[i])) {
            Capcount++
        }
        else {
            Smallcount++
        }

    }
    if (Capcount === 1 && /[A-Z]/.test(word[0])) {
        return true
    }
    if (Capcount === word.length) {
        return true
    }
     if (Smallcount === word.length) {
        return true
    }
    else 
        return false
    

};