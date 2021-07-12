import { findComponentByPath } from './index'

describe('findComponentByPath Unit Test Suites', () => {
    it('should return something', () => {

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

        expect(findComponentByPath(path, routes)).toBe(routes[0])
    })

    it('should return something else', () => {
        const path = '/toto'

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

        expect(findComponentByPath(path, routes)).toBe(undefined)
    })
})
