import { isInTestEnv } from './index'


describe('Env Utils Unit Test Suite', () => {
    it('should be in test env', () => {
        expect(isInTestEnv()).toBe(true)
    })
})
