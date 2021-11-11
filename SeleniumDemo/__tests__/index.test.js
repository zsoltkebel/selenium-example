// selenium test for index.html
const {Builder, By, Key, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('http://127.0.0.1:8080');
        var count = await driver.findElement(By.id('count')).getText();
        var person = await driver.findElement(By.id('person')).getText();
        console.log('Count is: ', count);
        console.log('Name is: ', person);
        await driver.findElement(By.id('name')).sendKeys('Billy', Key.RETURN);
        await driver.findElement(By.id('increment-button')).click();
        count = await driver.findElement(By.id('count')).getText();
        person = await driver.findElement(By.id('person')).getText();
        console.log('Count is: ', count);
        console.log('Name is: ', person);
        var page = await driver.getPageSource();
        console.log(page);
    } finally {
        await driver.quit();
    }
}

example();
