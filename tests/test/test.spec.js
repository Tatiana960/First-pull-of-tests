let signPage = require('../pages/signpage');
let homepage = require('../pages/homepage')
let methods = require('../pages/methods')
let userproperties = require('../conf/userproperties')
let locators = require('../pages/locators')
var EC = protractor.ExpectedConditions;

describe('Check sign in', function () {

    it('should check log in in Yandex account', async function () {
        await methods.ignoreAngular()//site doesn't open without this...
        await methods.getSite()//open the site
        expect(await browser.getTitle()).toEqual('Яндекс')//to check we are in the right site
        await homepage.clickSign();//to click on sign in menu
        browser.sleep(6000)
        var winHandles = browser.getAllWindowHandles();
        winHandles.then(async function (handles) {
            var parentWindow = handles[0];
            var popUpWindow = handles[1];
            browser.switchTo().window(popUpWindow);
            expect(await signPage.username.isEnabled()).toBe(true);
            await signPage.username.click()
            await signPage.setUserName();//set username
            await signPage.submit.click()
            browser.sleep(5000)
            await signPage.setPassword();//set password
            await signPage.submit.click();//click submit button
            browser.sleep(5000)
            browser.manage().window().maximize();
            expect(signPage.userAccountname.getText()).toEqual(userproperties.username);
        });
    });
    it('should check log out in Yandex account', async function () {

        await methods.ignoreAngular()//site doesn't open without this...
        await methods.getSite()//open the site
        expect(await browser.getTitle()).toEqual('Яндекс')//to check we are in the right site
        await homepage.clickSign();//to click on sign in menu
        browser.sleep(6000)
        var winHandles = browser.getAllWindowHandles();
        winHandles.then(async function (handles) {
            var parentWindow = handles[0];
            var popUpWindow = handles[1];
            browser.switchTo().window(popUpWindow);
            expect(await signPage.username.isEnabled()).toBe(true);
            await signPage.username.click()
            await signPage.setUserName();//set username
            await signPage.submit.click()
            browser.sleep(5000)
            await signPage.setPassword();//set password
            await signPage.submit.click();//click submit button
            browser.sleep(5000)
            browser.manage().window().maximize();
            expect(signPage.userAccountname.getText()).toEqual(userproperties.username);
            signPage.userAccountname.click()
            browser.sleep(5000)
            signPage.exit.click()
            expect(browser.getTitle()).toEqual('Авторизация');
        });
    });
    it('should check log in with wrong login', async function () {
        await methods.ignoreAngular()//site doesn't open without this...
        await methods.getSite()//open the site
        expect(await browser.getTitle()).toEqual('Яндекс')//to check we are in the right site
        await homepage.clickSign();//to click on sign in menu
        browser.sleep(6000)
        var winHandles = browser.getAllWindowHandles();
        winHandles.then(async function (handles) {
            var parentWindow = handles[0];
            var popUpWindow = handles[1];
            browser.switchTo().window(popUpWindow);
            expect(await signPage.username.isEnabled()).toBe(true);
            await signPage.username.click()
            await signPage.setWrongUserName();//set username
            await signPage.submit.click()
            browser.sleep(5000)
            browser.manage().window().maximize();
            expect(locators.errormessage.getText()).toEqual('Такого аккаунта нет')
        });
    });
    it('should check log in with wrong password', async function () {
        await methods.ignoreAngular()//site doesn't open without this...
        await methods.getSite()//open the site
        expect(await browser.getTitle()).toEqual('Яндекс')//to check we are in the right site
        await homepage.clickSign();//to click on sign in menu
        browser.sleep(6000)
        var winHandles = browser.getAllWindowHandles();
        winHandles.then(async function (handles) {
            var parentWindow = handles[0];
            var popUpWindow = handles[1];
            browser.switchTo().window(popUpWindow);
            expect(await signPage.username.isEnabled()).toBe(true);
            await signPage.username.click()
            await signPage.setUserName();//set username
            await signPage.submit.click()
            browser.sleep(5000)
            await signPage.setWrongPassword();//set password
            await signPage.submit.click();//click submit button
            browser.sleep(5000)
            expect(locators.errormessagePassw.getText()).toEqual('Неверный пароль')
        });
    });
    it('should navigate to Video menu', async function () {
        await methods.ignoreAngular()//site doesn't open without this...
        await methods.getSite()//open the site
        expect(await browser.getTitle()).toEqual('Яндекс')//to check we are in the right site
        locators.video.click();
        browser.sleep(4000)
        var winHandles = browser.getAllWindowHandles();
        winHandles.then(async function (handles) {
            var parentWindow = handles[0];
            var popUpWindow = handles[1];
            browser.switchTo().window(popUpWindow);
            expect(browser.getCurrentUrl()).toEqual('https://yandex.by/video?utm_source=main_stripe_big');
        });
    });
    it('should navigate to Pictures menu', async function () {
        await methods.ignoreAngular()//site doesn't open without this...
        await methods.getSite()//open the site
        expect(await browser.getTitle()).toEqual('Яндекс')//to check we are in the right site
        locators.pictures.click();
        browser.sleep(4000)
        var winHandles = browser.getAllWindowHandles();
        winHandles.then(async function (handles) {
            var parentWindow = handles[0];
            var popUpWindow = handles[1];
            browser.switchTo().window(popUpWindow);
            expect(browser.getTitle()).toEqual('Яндекс.Картинки: поиск изображений в интернете, поиск по изображению');
        });
    });
    it('should navigate to News menu', async function () {
        await methods.ignoreAngular()//site doesn't open without this...
        await methods.getSite()//open the site
        expect(await browser.getTitle()).toEqual('Яндекс')//to check we are in the right site
        locators.news.click();
        browser.sleep(4000)
        var winHandles = browser.getAllWindowHandles();
        winHandles.then(async function (handles) {
            var parentWindow = handles[0];
            var popUpWindow = handles[1];
            browser.switchTo().window(popUpWindow);
            expect(browser.getCurrentUrl()).toEqual('https://yandex.by/news/?utm_source=main_stripe_big');
        });
    });
    it('should navigate to Maps menu', async function () {
        await methods.ignoreAngular()//site doesn't open without this...
        await methods.getSite()//open the site
        expect(await browser.getTitle()).toEqual('Яндекс')//to check we are in the right site
        locators.maps.click();
        browser.sleep(4000)
        var winHandles = browser.getAllWindowHandles();
        winHandles.then(async function (handles) {
            var parentWindow = handles[0];
            var popUpWindow = handles[1];
            browser.switchTo().window(popUpWindow);
            expect(browser.getTitle()).toEqual('Яндекс.Карты — поиск мест и адресов, городской транспорт');
        });
    });
    it('should navigate to Market menu', async function () {
        await methods.ignoreAngular()//site doesn't open without this...
        await methods.getSite()//open the site
        expect(await browser.getTitle()).toEqual('Яндекс')//to check we are in the right site
        locators.market.click();
        var winHandles = browser.getAllWindowHandles();
        winHandles.then(async function (handles) {
            var parentWindow = handles[0];
            var popUpWindow = handles[1];
            browser.switchTo().window(popUpWindow);
            expect(browser.getCurrentUrl()).toEqual('https://market.yandex.by/?clid=505&utm_source=main_stripe_big');
        });
    });
    it('should navigate to Translators menu', async function () {
        await methods.ignoreAngular()//site doesn't open without this...
        await methods.getSite()//open the site
        expect(await browser.getTitle()).toEqual('Яндекс')//to check we are in the right site
        locators.translator.click();
        var winHandles = browser.getAllWindowHandles();
        winHandles.then(async function (handles) {
            var parentWindow = handles[0];
            var popUpWindow = handles[1];
            browser.switchTo().window(popUpWindow);
            expect(browser.getTitle()).
            toEqual('Яндекс.Переводчик – словарь и онлайн перевод на английский, русский, немецкий, французский,украинский и другие языки.');
        });
    });
    it('should navigate to Music menu', async function () {
        await methods.ignoreAngular()//site doesn't open without this...
        await methods.getSite()//open the site
        expect(await browser.getTitle()).toEqual('Яндекс')//to check we are in the right site
        browser.manage().window().maximize();
        locators.music.click();
        var winHandles = browser.getAllWindowHandles();
        winHandles.then(async function (handles) {
            var parentWindow = handles[0];
            var popUpWindow = handles[1];
            browser.switchTo().window(popUpWindow);
            expect(browser.getCurrentUrl()).toEqual('https://music.yandex.by/home?utm_source=main_stripe_big');
        });
    });
    it('should switch on English', async function () {
        var EC = protractor.ExpectedConditions;
        await methods.ignoreAngular()//site doesn't open without this...
        await methods.getSite()//open the site
        expect(await browser.getTitle()).toEqual('Яндекс')//to check we are in the right site
        locators.language.click();
        browser.sleep(5000)
        await(locators.additional.isEnabled()).click()
        locators.rus.click()
        browser.sleep(10000)
        locators.eng.click()
        browser.sleep(5000)
        locators.submit2.click()
    });
});