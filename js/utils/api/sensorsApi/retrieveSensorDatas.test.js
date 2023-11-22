import { data } from '../../../../data/mock-homepage-data'

import { retrieveSensorsData } from './index'

describe('Sensors API Unit Test Suites', () => {
    it('should return the mocked data', () => {
        expect(retrieveSensorsData()).toBe(data.facades)
    })
})