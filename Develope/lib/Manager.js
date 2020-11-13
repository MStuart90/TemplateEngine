

var Employee = require('./Employee')

class Manager extends Employee {
    constructor(name, id, email, quote, officeNumber){
        super(name, id, email, quote);
        this.officeNumber = officeNumber    
    };

    getOfficeNumber(){
        return(this.officeNumber)
    };

   
    getRole(){
        return('Manager')
    };
}

module.exports = Manager;