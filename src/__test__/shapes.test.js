
const {Circle, Square,Triangle, Shapes}= require('../shapes');

describe('Shapes', () => {
    describe('setText', () => {
            it('should return true if text is <= 3', () => {
            //arrange
            const text = 'dem';
            const shape = new Shapes()
            //act
            const callShape = shape.setText(text)
            //assert
            expect(callShape).toBe(true)

        })
        it('should return false if text is > 3', () => {
            //act
            const text = 'demo';
            const shape = new Shapes()
            //arrange
            const callShape = shape.setText(text)
            //assert
            expect(callShape).toBe(false)
   
        })
    })
    describe('setColor', () => {
        it('should return true if color is set to a pink', () => {
            //arrange
            const color = 'pink';
            const shape = new Shapes()
            //act
            const callShape = shape.setShape(color)
            // assert
            expect(callShape).toBe(true)

        })
        it('should return false if color is set to blue', () => {
            //arrange
            const color = 'blue';
            const shape = new Shapes()
            //act
            const callShape = shape.setShape(color)
            // assert
            expect(callShape).toBe(false)

        })
       
    })
    describe('setShape', () => {
        it('should return true if color is set to a pink', () => {
            //arrange
            const color = 'pink';
            const shape = new Shapes()
            //act
            const callShape = shape.setShape(color)
            // assert
            expect(callShape).toBe(true)

        })
        it('should return false if color is set to blue', () => {
            //arrange
            const color = 'blue';
            const shape = new Shapes()
            //act
            const callShape = shape.setShape(color)
            // assert
            expect(callShape).toBe(false)

        })
       
    })
    describe('setColorText', () => {
        it('should return true if color is set to a white', () => {
            //arrange
            const color = 'white';
            const shape = new Shapes()
            //act
            const callShape = shape.setColorText(color)
            // assert
            expect(callShape).toBe(true)

        })
        it('should return false if color is set to blue', () => {
            //arrange
            const color = 'blue';
            const shape = new Shapes()
            //act
            const callShape = shape.setColorText(color)
            // assert
            expect(callShape).toBe(false)

        })
       
    })
})

describe('Circle', () => {
    describe('render', () => {
        it('should return to equal if shape color is set to green and text is white', () => {
            const shape = new Circle('','','green','white');
            const expected = '<circle cx="150" cy="100" r="100"  stroke="green"  fill="green" stroke-width="2"/><text  x="80" y="120" font-weight="700" letter-spacing="10px" font-size="70px" fill="white">Text</text>'
            const callShape = shape.render('green', 'white')
            expect(callShape).toEqual(expected)
        })
    })
    describe('render', () => {
        it('should return not eaqual if shape color is set to green and text is white', () => {
            const shape = new Circle('','','green','white');
            const expected = '<circle cx="150" cy="100" r="100"  stroke="green"  fill="green" stroke-width="2"/><text  x="80" y="120" font-weight="700" letter-spacing="10px" font-size="70px" fill="white">Text</text>'
            const callShape = shape.render('', '')
            expect(callShape).not.toBe(expected)
        })
    })
})
describe('Triangle', () => {
    describe('render', () => {
        it('should return to equal if shape color is set to green and text is white', () => {
            const shape = new Triangle('','','green','white');
            const expected = '<polygon  points="103,0 200,150 15,150" fill="green"  stroke="green"  stroke-width="1"/><text x="53" y="120" font-size="50px" font-weight="bold" letter-spacing="10px" fill="white">Text</text>'
            const callShape = shape.render('green', 'white')
            expect(callShape).toEqual(expected)
        })
    })
    describe('render', () => {
        it('should return not eaqual if shape color is set to green and text is white', () => {
            const shape = new Triangle('','','green','white');
            const expected = '<polygon  points="103,0 200,150 15,150" fill="green"  stroke="green"  stroke-width="1"/><text x="53" y="120" font-size="50px" font-weight="bold" letter-spacing="10px" fill="white">Text</text>'
            const callShape = shape.render('', '')
            expect(callShape).not.toBe(expected)
        })
    })
})
describe('Square', () => {
    describe('render', () => {
        it('should return to equal if shape color is set to green and text is white', () => {
            const shape = new Square('','','green','white');
            const expected = '<rect x="50" y="0" width="200" height="200" stroke="green" fill="green" stroke-width="2"/><text x="65" y="125" font-weight="bolder" font-size="80px" font-family="Arial, Helvetica, sans-serif" fill="white">Text</text>'
            const callShape = shape.render('green', 'white')
            expect(callShape).toEqual(expected)
        })
    })
    describe('render', () => {
        it('should return not eaqual if shape color is set to green and text is white', () => {
            const shape = new Square('','','green','white');
            const expected = '<rect x="50" y="0" width="200" height="200" stroke="green" fill="green" stroke-width="2"/><text x="65" y="125" font-weight="bolder" font-size="80px" font-family="Arial, Helvetica, sans-serif" fill="white">Text</text>'
            const callShape = shape.render('', '')
            expect(callShape).not.toBe(expected)
        })
    })
})