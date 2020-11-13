
var Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, id, quote, email, github,){
        super(name, id, quote, email);
        this.github = github;   
    };

   
    getGithub(){
        return(this.github)
    
    };
    

    getRole(){
        return('Engineer')
    };

    
}

module.exports = Engineer;