class Shapes {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
    setColor(color){
        this.shapeColor = color;
    }
    colorText(color){
        this.textColor = color;
    }
    setText(text){
        if(text.length <= 3){
            this.text= text;
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
    render() {
        return `
        <circle cx="150" cy="100" r="100"  stroke=${this.shapeColor}  fill=${this.shapeColor} stroke-width="2"/>
        <text x="135" y="100" fill=${this.textColor}>${this.text}</text>
        `
    }
  
};

class Square extends Shapes {
    constructor(shape, text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
        this.shape = shape;
    }
    render() {
        return `<rect x="50" y="0" width="200" height="200" stroke=${this.shapeColor} fill=${this.shapeColor} stroke-width="2"/>
        <text x="135" y="100" fill=${this.textColor}>${this.text}</text>
        `
    }
};

class Triangle extends Shapes {
    constructor(shape, text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
        this.shape = shape;
    }
    render(){
        return `<polygon  points="103,0 200,150 15,150" fill=${this.shapeColor}  stroke=${this.shapeColor}  stroke-width="1"/>
        <text x="85" y="100" fill=${this.textColor}>${this.text}</text>
        `
    }
}


module.exports = {
    Circle,
    Square,
    Triangle,
    Shapes,
    
};