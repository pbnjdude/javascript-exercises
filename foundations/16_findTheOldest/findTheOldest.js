const findTheOldest = function(people) {
    let arrayAges = []

    for (let i = 0; i < people.length-1; i++){
        let deathYearFirst
        let deathYearSecond
        if ("yearOfDeath" in people[i]){
            console.log("there is a year")
            deathYearFirst = people[i].yearOfDeath;
        }else{
            deathYearFirst = 2026
            console.log("there is no death year")
        }

        if (people[i+1].yearOfDeath == "undefined"){
            deathYearSecond = 2026;
        }else{
            deathYearSecond = people[i+1].yearOfDeath;
        }
        if ((deathYearFirst - people[i].yearOfBirth) > (deathYearSecond - people[i+1].yearOfBirth)){
            return people[i];
        } 
    }

};



// Do not edit below this line
module.exports = findTheOldest;
