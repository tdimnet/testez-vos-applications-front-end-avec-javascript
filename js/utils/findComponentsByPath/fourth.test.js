import { findComponentByPath } from './index'

const routes = [
    {
        path: '/',
        component: 'home'
    },
    {
        path: '/about',
        component: 'about'
    }
]

describe('findComponentByPath Unit Test Suites', () => {
    it('should return something', () => {

        const path = '/'

        expect(findComponentByPath(path, routes)).toBe(routes[0])
    })

    it('should return something else', () => {
        const path = '/toto'

        expect(findComponentByPath(path, routes)).toBe(undefined)
    })
})
