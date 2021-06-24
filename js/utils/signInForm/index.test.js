/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom'
import { getByRole, getByTestId, getByLabelText } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'


import SignInPage from '../../pages/signIn/index'
import { handleSignInForm } from './index'


beforeEach(() => {
    document.body.innerHTML = SignInPage.render()
    handleSignInForm()
})

afterEach(() => {
    document.body.innerHTML = ''
})

describe('SignInForm Integration Test Suites', () => {
    it('should not display by default the email error message', () => {
        expect(getByTestId(document.body, 'user-email-error-msg'))
            .toHaveClass('hidden')
    })

    it('should display the email error message when the value is not correct', () => {
        userEvent.type(
            getByLabelText(document.body, 'Votre addresse e-mail'),
            'thomas'
        )
        
        userEvent.click(getByRole(document.body, 'button'))

        expect(getByTestId(document.body, 'user-email-error-msg'))
            .not
            .toHaveClass('hidden')
    })
    
    it('should display not the email error message when the value is correct', () => {
        userEvent.type(
            getByLabelText(document.body, 'Votre addresse e-mail'),
            'thomas@facadia.com'
        )
        
        userEvent.click(getByRole(document.body, 'button'))

        expect(getByTestId(document.body, 'user-email-error-msg'))
            .toHaveClass('hidden')
    })
})
