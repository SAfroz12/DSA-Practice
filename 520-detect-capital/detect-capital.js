/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {

// USA - if caps ===usa.length  -- true
//usa - if lows == usa.length = true
//Usa - if caps ==1 && smallest==usa.length-1

if(word.toLowerCase() === word || word.toUpperCase() === word){
    return true
}else if(word[0].toUpperCase() + word.slice(1).toLowerCase() === word){
    return true
}else{
    return false
}


};