/**
 * @jest-environment jsdom
 */

import FacadeDetails from '../pages/facadeDetails/index'

import {
    getByTestId
} from '@testing-library/dom'
import '@testing-library/jest-dom'

let $wrapper

beforeAll(() => {
    $wrapper = document.createElement('div')
})

afterAll(() => {
    $wrapper = null
})


describe('FacadeDetails Integration Test Suites', () => {
    it('should be null', () => {
        expect($wrapper.querySelector('.sensor-details')).toBeNull()
    })

    it('should have the class ".sensor-details"', async () => {
        $wrapper.innerHTML = await FacadeDetails.render()
        expect($wrapper.querySelector('.sensor-details')).toBeDefined()
    })

    it('should have a sensor image', () => {
        expect(getByTestId($wrapper, 'sensor-image'))
            .toBeDefined()
    })
    
    it('should have the sensor id 232124', () => {
        expect(getByTestId($wrapper, 'sensor-image'))
            .toHaveAttribute('alt', 'Capteur n°232124')
    })

    it('should have a lastInspectionDate', () => {
        expect(getByTestId($wrapper, 'last-inspection-date'))
            .toBeDefined()
    })
    
    it('should have a lastInspectionDate in the right format', () => {
        const re = /[0-9]{2}[/][0-9]{2}[/][0-9]{4}/

        expect(
            re.test(getByTestId($wrapper, 'last-inspection-date').textContent.trim())
        ).toBe(true)
    })
    
    it('should be 23/02/2021 for the last inspection date', () => {
        expect(getByTestId($wrapper, 'last-inspection-date'))
            .toHaveTextContent("23/02/2021")
    })
})
