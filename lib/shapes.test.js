
const { exportAllDeclaration } = require('@babel/types');
const { execPath } = require('process');
const {Circle, Square,Triangle, Shapes}= require('./shapes');

describe('Shapes', () => {
    describe('setText', () => {
        it('should return true if text is <= 3', () => {
         const text = 'dem';
         const shape = new Shapes()

         const callShape = shape.setText(text)

         expect(callShape).toBe(true)

        })
        it('should return false if text is > 3', () => {
            const text = 'demo';
            const shape = new Shapes()
   
            const callShape = shape.setText(text)
   
            expect(callShape).toBe(false)
   
           })
    })
})

