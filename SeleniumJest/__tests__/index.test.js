// selenium test for index.html
const {Builder, By, Key, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const url = 'http://localhost:8080';

describe('executing cheesecake tests', () => {
    let driver;

    beforeEach(async () => {
        driver = await new Builder().forBrowser('chrome').build();
        await driver.get(url);
    }, 10000);

    afterEach(async () => {
        await driver.quit();
    }, 10000);

    test('page loads correctly', async () => {
        const title = await driver.getTitle();
        expect(title).toContain('Inventory Manager');
        const pageName = await driver.findElement(By.tagName('h1')).getText();
        expect(pageName).toContain('Cheesecake');
    });

    test('initial person and count values', async () => {
        var count = await driver.findElement(By.id('count')).getText();
        var person = await driver.findElement(By.id('person')).getText();
        expect(count).toBe('0');
        expect(person).toBe('For');
    });

    test('javascript person and count values', async () => {
        await driver.findElement(By.id('name')).sendKeys('Billy', Key.RETURN);
        await driver.findElement(By.id('increment-button')).click();
        var count = await driver.findElement(By.id('count')).getText();
        var person = await driver.findElement(By.id('person')).getText();
        var page = await driver.getPageSource();
        expect(count).toBe("1");
        expect(person).toBe('Billy');
        console.log(page);
    });
});

// async function example() {
//     let driver = await new Builder().forBrowser('chrome').build();
//     try {
//         await driver.get('http://127.0.0.1:8080');
//         var count = await driver.findElement(By.id('count')).getText();
//         var person = await driver.findElement(By.id('person')).getText();
//         console.log('Count is: ', count);
//         console.log('Name is: ', person);
//         await driver.findElement(By.id('name')).sendKeys('Billy', Key.RETURN);
//         await driver.findElement(By.id('increment-button')).click();
//         count = await driver.findElement(By.id('count')).getText();
//         person = await driver.findElement(By.id('person')).getText();
//         console.log('Count is: ', count);
//         console.log('Name is: ', person);
//         var page = await driver.getPageSource();
//         console.log(page);
//     } finally {
//         await driver.quit();
//     }
// }
//
// example();
