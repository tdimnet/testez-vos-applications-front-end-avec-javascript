/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns number
 */
const makeSum = (a, b) => a + b


describe('toBe Unit Test Suites', () => {
    it('should return 4', () => {
        expect(makeSum(2, 2)).toEqual(4)
    })

    it('should not return 6', () => {
        expect(makeSum(2, 3)).not.toEqual(4)
    })
})
