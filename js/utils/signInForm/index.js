import {
    USER_EMAIL,
    USER_PASSWORD
} from '../../constants.js'


const checkUserEmailInput = () => {
    const $userMailInput = document.querySelector('#user-email')
    const $userEmailErrorMSg = document.querySelector('.user-email-error-msg')

    const isUserEmailValid = $userMailInput.value.toLowerCase() === USER_EMAIL

    if (isUserEmailValid) {
        $userEmailErrorMSg.classList.add('hidden')
    } else {
        $userEmailErrorMSg.classList.remove('hidden')
    }

    return isUserEmailValid
}


const checkUserPasswordInput = () => {
    const $userPasswordInput = document.querySelector('#user-password')
    const $userPasswordErrorMSg = document.querySelector('.user-password-error-msg')

    const isUserPasswordValid = $userPasswordInput.value.toLowerCase() === USER_PASSWORD

    if (isUserPasswordValid) {
        $userPasswordErrorMSg.classList.add('hidden')
    } else {
        $userPasswordErrorMSg.classList.remove('hidden')
    }

    return isUserPasswordValid
}


const isFormValid = () => checkUserEmailInput() && checkUserPasswordInput()


export const handleSignInForm = () => {
    const $formWrapper = document.querySelector('.sign-in-form')

    $formWrapper.addEventListener('submit', (e) => {
        e.preventDefault()

        if (isFormValid()) {
            window.location = '/#/home'
        }
    })
}
