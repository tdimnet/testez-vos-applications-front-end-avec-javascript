// Vous importez la fonction à tester
import { sayHello } from './unit1.js'


// Puis, vous créez le bloc de séries de test (ou Test Suite)
describe('sayHello Unit Test Suites', () => {
    it('should display "Hello, World"', () => {
        expect(sayHello()).toEqual("Hello, World")
    })
    
    it('should display "Bonjour Alexandra"', () => {
        expect(sayHello("Alexandra")).toEqual("Bonjour Alexandra")
    })
    
    it('should display "Hello, Thomas"', () => {
        expect(sayHello("Thomas")).toEqual("Hello, Thomas")
    })
})
