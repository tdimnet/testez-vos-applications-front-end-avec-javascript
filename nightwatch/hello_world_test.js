module.exports = {
    test: client => {
        client
            .url('https://duckduckgo.com/')
            .waitForElementVisible('#logo_homepage_link', 10 * 1000)
            .assert.visible('input[type=text]')
            .setValue('input[type=text]', 'hello world')
            .assert.visible('input[type=submit]')
            .click('input[type=submit')
            .waitForElementVisible('.results--main')
            .assert.visible('#r1-0')
            .assert.visible('#r1-0 a[data-testid="result-title-a"]')
            .assert.containsText('#r1-0 a[data-testid="result-title-a"]', 'Hello world — Wikipédia')
            .click('#r1-0 a[data-testid="result-title-a"]')
            .assert.visible('#firstHeading')
            .assert.containsText('#firstHeading', 'Hello world')
    }
}
