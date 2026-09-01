const sumAll = function(a, b) {
    if (!(Number.isInteger(a)) || !(Number.isInteger(b))) return "ERROR";
    if (a < 0 || b < 0) return "ERROR"; 

    
    let start = 0; 
    let end = 0; 
    if (a < b){
        start = a; 
        end = b; 
    }else{
        end = a; 
        start = b; 
    }
    let sum = 0; 
    for (let i = start; i <= end; i++){
        sum += i ;
    }
    return sum; 
};

// Do not edit below this line
module.exports = sumAll;
