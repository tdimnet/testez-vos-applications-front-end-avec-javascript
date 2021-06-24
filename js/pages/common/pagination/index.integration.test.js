/**
 * @jest-environment jsdom
 */

import {
    getByTestId
} from '@testing-library/dom'

import Pagination from "./index"


let $wrapper

beforeEach(() => {
    $wrapper = document.createElement('div')
})

afterEach(() => {
    $wrapper = null
})

/**
 * @function Pagination.render
 */
describe('Pagination Integration Test Suites', () => {
    it('should render 0 pagination list item', () => {
        const NUMBER_OF_SENSORS = 0

        const $paginationList = Pagination.render(NUMBER_OF_SENSORS)
        $wrapper.innerHTML = $paginationList
        
        expect(
            getByTestId($wrapper,"pagination-list").querySelectorAll('.pagination-list-item')
        ).toHaveLength(0)
    })
    
    it('should render 2 pagination list item', () => {
        const NUMBER_OF_SENSORS = 10

        const $paginationList = Pagination.render(NUMBER_OF_SENSORS)
        $wrapper.innerHTML = $paginationList
        
        expect(
            getByTestId($wrapper,"pagination-list").querySelectorAll('.pagination-list-item')
        ).toHaveLength(2)
    })
    
    it('should render 3 pagination list item', () => {
        const NUMBER_OF_SENSORS = 20

        const $paginationList = Pagination.render(NUMBER_OF_SENSORS)
        $wrapper.innerHTML = $paginationList
        
        expect(
            getByTestId($wrapper,"pagination-list").querySelectorAll('.pagination-list-item')
        ).toHaveLength(3)
    })
})
