const findTheOldest = function(array) {

    function getAge(person){
        let age;
        let currentYear = new Date();

        if('yearOfDeath' in person){
            age = person.yearOfDeath - person.yearOfBirth;
        } else {
            age = currentYear.getFullYear() - person.yearOfBirth;
        }
        return age;
    }

    return array.reduce((oldestPerson, newPerson) => 
        (getAge(newPerson) > getAge(oldestPerson)) ? newPerson : oldestPerson);
};

// Do not edit below this line
module.exports = findTheOldest;
