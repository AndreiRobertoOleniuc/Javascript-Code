require('chromedriver');
const { Builder, By, Key, until } = require('selenium-webdriver');
(async function test() {
    let driver = await new Builder().forBrowser('chrome').build();
        await driver.get('https://github.com/');
        const variable = input()
})();