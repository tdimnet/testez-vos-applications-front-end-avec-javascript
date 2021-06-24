/**
 * 
 * @returns {array}
 */
const getFriends = () => ["mike", "john", "lucie", "anna"]

describe('toContain Unit Test Suite', () => {
    it('should contain the name "john"', () => {
        expect(getFriends()).toContain('john')
    })
    
    it('should not contain the name "thomas"', () => {
        expect(getFriends()).not.toContain('thomas')
    })
})
