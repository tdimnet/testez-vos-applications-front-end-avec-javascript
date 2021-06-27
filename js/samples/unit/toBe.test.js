const me = {
    firstName: "Thomas",
    lastName: "Dimnet",
    age: 31
}

const color = "tomato"

describe('toBe Unit Test Suites', () => {
    it('should be my firstName', () => {
        expect(me.firstName).toBe("Thomas")
    })

    it('should be my age', () => {
        expect(me.age).toBe(31)
    })

    it('should be the color tomato', () => {
        expect(color).toBe('tomato')
    })

    it('should not be the color tomato', () => {
        expect(color).not.toBe('lightblue')
    })
})
