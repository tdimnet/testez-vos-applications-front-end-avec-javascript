import { convertCelsiusToFahrenheit } from './index'

// Première suite de test
describe('convertCelsiusToFahrenheit first Unit Test Suite', () => {
    it('should convert -30 to -22', () => {
        expect(convertCelsiusToFahrenheit(-30)).toBe(-22)
    })
    
    it('should convert -10 to 14', () => {
        expect(convertCelsiusToFahrenheit(-10)).toBe(14)
    })
})


// Deuxième suite de test
describe('convertCelsiusToFahrenheit second Unit Test Suite', () => {
    it('should not return a number', () => {
        expect(convertCelsiusToFahrenheit('abc')).not.toBe('number')
    })
    
    it('should return NaN', () => {
        expect(convertCelsiusToFahrenheit([1, 2, 3])).toBe(NaN)
    })
})


// Troisième suite de test
describe('convertCelsiusToFahrenheit third Unit Test Suite', () => {
    it('should convert 0  to 32', () => {
        expect(convertCelsiusToFahrenheit(0)).toBe(32)
    })
    
    it('should convert 20 to 68', () => {
        expect(convertCelsiusToFahrenheit(20)).toBe(68)
    })
})


// Quatrième suite de test
describe('convertCelsiusToFahrenheit fourth Unit Test Suite', () => {
    it('shoud be a number', () => {
        expect(typeof convertCelsiusToFahrenheit(0)).toBe('number')
    })

    it('should convert 30 to 86', () => {
        expect(convertCelsiusToFahrenheit(30)).toBe(86)
    })
})