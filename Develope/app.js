const Employee = require('./lib/Employee')
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const util = require('util');

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const writeFileAsync = util.promisify(fs.writeFile)


class Main {
    constructor() {
        this.teamArray = [];
    }
  
    async run() {
        const { teamSize } = await inquirer.prompt([{
            type: 'input',
            name: 'teamSize',
            message: 'Please input your team size',
            default: 2,
        }]);

       
        for (let i = 0; i < teamSize; i++) {
            console.log("======================")
            const response = await inquirer.prompt([
            
                {
                    type: 'input',
                    name: 'name',
                    message: 'Enter team member name',
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'Enter team member id',
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'Enter team member email',
                },
                {
                    type: 'input',
                    name: 'quote',
                    message: 'Enter favorite office quote',
                },
                {
                    type: 'list',
                    name: 'role',
                    message: "Choose team member's role",
                    choices: [
                        'Engineer',
                        'Intern',
                        'Manager',
                    ]
                },
                {
                        type: 'input',
                        name: 'github',
                        message: "Enter engineer's Github user name",
                        when: ({ role })=> role === "Engineer"
                },
                {
                    type: 'input',
                    name: 'school',
                    message: "Enter intern's school",
                    when: ({ role })=> role === "Intern"
                },
                {
                    type: 'input',
                    name: 'officeNumber',
                    message: "Enter manager's office number",
                    when: ({ role })=> role === "Manager"
                },
            ]);
              
            const {
                name,
                id,
                email,
                quote,
                role,
                github,
                school,
                officeNumber,
            } = response;

            if (role == 'Engineer') {
                this.teamArray.push(new Engineer(name, id, quote, email, github))
            }
            if (role == 'Manager') {
                this.teamArray.push(new Manager(name, id, quote, email, officeNumber))
            }
            if (role == 'Intern') {
                this.teamArray.push(new Intern(name, id, quote, email, school))
            }
        }
       
        const html = render(this.teamArray);
        fs.writeFile("team.html", html, function(err) {

            if (err) {
              return console.log(err);
            }
          
            console.log("Success!");
          
          });     
    }
}

const program = new Main();
program.run();
