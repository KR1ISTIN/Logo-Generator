const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Square,Triangle}= require('./lib/shapes.js'); // classes for the shapes
const {create} = require('./lib/document.js')




const questions = [
    {
        type: 'input',
        message: 'SVG file name?',
        name: 'nameF',
    },
    {
        type: 'input',
        message: 'Text for the logo? Up to three characters',
        name: 'text',
        validate:(text) => {
            if(text.length > 3) {
                return 'Text needs to be three characters or less';
            } 
          return true
        }
    },
    {
        type: 'input',
        message: 'What would you like the text color to be? (Add color keyword or hexidecimal)',
        name: 'textColor',
    },
    {
        type: 'list',
        message: 'What shape would you like?',
        name: 'shape',
        choices: ['Square', 'Triangle', 'Circle']
    },
    {
        type: 'input',
        message: 'What color would you like for your logo? (Add color keyword or hexidecamal)',
        name: 'shapeColor',
    },
]

class UserInfo {
    constructor() {
        this.nameF = '';
        this.text = '';
        this.textColor = '';
        this.shape = '';
        this.shapeColor = '';
    }
    run() {
        return inquirer.prompt(questions) //returning a promise object
        .then((data) => { // setting the values from prompt
        
            return this.nameF = `./dist/${data.nameF}.svg`, this.text = `${data.text}`,this.textColor = `${data.textColor}`,this.shape = `${data.shape}`,this.shapeColor = `${data.shapeColor}`;
        })
        .then(() => { // testing which shape is chosen then tags are created
           if(this.shape === 'Circle') {
            const circle = new Circle(this.shape, this.text, this.textColor, this.shapeColor);
            //console.log(circle.render());
            const renTags = circle.render();
            return renTags
           } else if (this.shape === 'Square') {
            const square = new Square(this.shape, this.text, this.textColor, this.shapeColor);
            //console.log(square.render());
            const renTags = square.render();
            return renTags
           } else if( this.shape === 'Triangle') {
            const triangle = new Triangle(this.shape, this.text, this.textColor, this.shapeColor);
            //console.log(triangle.render());
            const renTags = triangle.render();
            return renTags
           }
        }) 
        .then((renTags) => { // passing the tags created into the create function torender svg file
            const shapeTags = renTags;
            const renDoc = create(shapeTags);
            console.log(renDoc);
            return renDoc
                      
        }).then((renDoc) => {
             fs.writeFile(this.nameF,renDoc , (err) => 
         err ? console.log(err) : console.log('Success, Generated ' + this.nameF + ' svg file'));
        })
    }
}

const begin = new UserInfo()
begin.run()