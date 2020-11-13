

var Employee = require('./Employee')

class Intern extends Employee {
    constructor(name, id, email, quote, school){
        super(name, id, email, quote);
        this.school = school  
    };
    
   
    getSchool(){
        return(this.school)
    };

   
    getRole(){
        return('Intern')
    }
}

module.exports = Intern;
