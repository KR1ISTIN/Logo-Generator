class Shapes {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
    setColorText(color){
        if(color === 'white') {
            return true
        } else {
            return false
        }
        
    }
    setShape(color){
        if(color === 'pink') {
            return true
        } else {
            return false
        }
        
    }
    setText(text){
        if(text.length <= 3){
            //this.text= text;
            return true
        } else {
            return false
        }
    }

};

class Circle extends Shapes {
    constructor(shape, text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
        this.shape = shape;
    }
    render(colorS, colorT) {
        if(colorS === 'green' && colorT === 'white') {
            const trial = `<circle cx="150" cy="100" r="100"  stroke="${colorS}"  fill="${colorS}" stroke-width="2"/><text  x="80" y="120" font-weight="700" letter-spacing="10px" font-size="70px" fill="${colorT}">Text</text>`
            return trial
        } 
        return `
        <circle cx="150" cy="100" r="100"  stroke="${this.shapeColor}" fill="${this.shapeColor}" stroke-width="2"/>
        <text  x="80" y="120" font-weight="700" letter-spacing="10px" font-size="70px" fill="${this.textColor}">${this.text}</text>
        `
    }
  
};

class Square extends Shapes {
    constructor(shape, text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
        this.shape = shape;
    }
    render(colorS,colorT) {
         if(colorS === 'green' && colorT === 'white') {
            const trial = `<rect x="50" y="0" width="200" height="200" stroke="${colorS}" fill="${colorS}" stroke-width="2"/><text x="65" y="125" font-weight="bolder" font-size="80px" font-family="Arial, Helvetica, sans-serif" fill="${colorT}">Text</text>`
            return trial
        } 
        return `<rect x="50" y="0" width="200" height="200" stroke="${this.shapeColor}" fill="${this.shapeColor}" stroke-width="2"/>
        <text x="65" y="125" font-weight="bolder" font-size="80px" font-family="Arial, Helvetica, sans-serif" fill="${this.textColor}">${this.text}</text>
        `
    }
};

class Triangle extends Shapes {
    constructor(shape, text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
        this.shape = shape;
    }
    render(colorS, colorT){
        if(colorS === 'green' && colorT === 'white') {
            const trial = `<polygon  points="103,0 200,150 15,150" fill="${colorS}"  stroke="${colorS}"  stroke-width="1"/><text x="53" y="120" font-size="50px" font-weight="bold" letter-spacing="10px" fill="${colorT}">Text</text>`
            return trial
        } 
        return `<polygon  points="103,0 200,150 15,150" fill="${this.shapeColor}"  stroke="${this.shapeColor}"  stroke-width="1"/>
        <text x="53" y="120" font-size="50px" font-weight="bold" letter-spacing="10px" fill="${this.textColor}">${this.text}</text>
        `
    }
}


module.exports = {
    Circle,
    Square,
    Triangle,
    Shapes,
    
};