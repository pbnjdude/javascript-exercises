const getTheTitles = function(arr) {
    newArray = []
    for (let i in arr){
        let bookTitle = arr[i].title;
        newArray.push(bookTitle)
    }
    return newArray; 
};

// Do not edit below this line
module.exports = getTheTitles;
