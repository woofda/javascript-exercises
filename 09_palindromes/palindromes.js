const palindromes = function (word) {
    let initial = word.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s+/g, '').split('');
    let reversed = [...initial].reverse();
    for(let i = 0; i < initial.length; i++) {
        if(initial[i] !== reversed[i]) return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
