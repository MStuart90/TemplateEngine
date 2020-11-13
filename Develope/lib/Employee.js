

class Employee{
    constructor(name, id, quote, email){
        this.name = name;
        this.id = id;
        this.quote = quote;
        this.email = email;  
    };
     
  
    getName(){
        return(this.name)
    };

    getId(){
       return(this.id)
    };
    getquote(){
        return(this.quote)
     };

    
    getEmail(){
        return(this.email)
    };

    getRole(){
        return("Employee")   
    };
}

module.exports = Employee;