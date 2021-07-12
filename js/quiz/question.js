export const renderQuestion = (name) => {
    const $wrapper = document.createElement('div')
    $wrapper.classList.add('hello-question')

    let text = '<div data-testid="question-test">'

    if (!name) {
        text += '<p>Hello, Question?</p>'
    } else if (name === 'Thomas') {
        text += '<p>Hello cher Auteur</p>'
    } else {
        text += '<p>Hello cher Inconnu</p>'
    }

    text += '</div>'

    $wrapper.innerHTML = text

    return $wrapper
}
