const fibonacci = function(num) {
    //if (num === 1) return 1; 
    let count
    if (typeof num !== "number"){
        count = parseInt(num);
    }else{
        count = num;
    }
    if (count < 0) return "OOPS"
    if (count == 0) return 0; 

    let firstPrev = 1; 
    let secondPrev = 0; 

    for (let i = 2; i <= count; i++){
        let current = firstPrev + secondPrev; 
        secondPrev = firstPrev; 
        firstPrev = current; 
        
    }
    return firstPrev; 
    
    

    

};
fibonacci(5);
// Do not edit below this line
module.exports = fibonacci;
