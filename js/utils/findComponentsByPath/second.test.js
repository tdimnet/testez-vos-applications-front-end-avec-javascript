import { findComponentByPath } from './index'

const path = '/'

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
        expect(findComponentByPath(path, routes)).toBe(routes[0])
    })

    it('should return something else', () => {
        expect(findComponentByPath('/toto', routes)).toBe(undefined)
    })
})
