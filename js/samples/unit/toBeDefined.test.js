/**
 * 
 * @returns {string}
 */
const getName = () => "thomas"

/**
 * 
 * @returns {number}
 */
const getAge = () => 31

describe('toBeDefined Unit Test Suites', () => {
    it('should return something', () => (
        expect(getName()).toBeDefined()
    ))

    it('should also return something', () => {
        expect(getAge()).toBeDefined()
    })
})
