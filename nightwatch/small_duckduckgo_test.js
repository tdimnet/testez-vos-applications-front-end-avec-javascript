module.exports = {
    test: client => {
        client
            .url('https://duckduckgo.com/')
            .waitForElementVisible('#logo_homepage_link', 10 * 1000)
            .assert.visible('input[type=text]')
            .setValue('input[type=text', 'hello world')
            .assert.visible('input[type=submit')
            .click('input[type=submit]')
            .waitForElementVisible('.results--main')
    }
}
