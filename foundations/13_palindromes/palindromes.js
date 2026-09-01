const palindromes = function (string) {
    string = string.toLowerCase(); 
    string = string.replace(/[^\w\s]/g, '');
    string = string.replace(/ /g, "");
    let letterArray = string.split("").reverse().join("");
    letterArray = letterArray.replace(/[^\w\s]/g, ''); 
    return letterArray === string; 
};

// Do not edit below this line
module.exports = palindromes;
