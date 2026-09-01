const fibonacci = function(num) {
    //if (num === 1) return 1; 
    array = [];
    adder = 0; 
    for (let i = 0; i <= num; i++){
        
        newValue = 1+ i + i
        array.push(newValue);
        

        
    }   
    console.table(array);
};

// Do not edit below this line
module.exports = fibonacci;
