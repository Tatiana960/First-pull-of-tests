
class Locators {

    sign = element(by.partialLinkText('Войти'))
    username = element(by.css('#passp-field-login'));
    submit = element(by.className('passp-sign-in-button'))
    password = element(by.id('passp-field-passwd'))
    userAccountname = element(by.className('user-account_has-ticker_yes'));
    exit = element(by.
    cssContainingText('.menu__text','Выйти из сервисов Яндекса'))
    errormessage = element(by.className('Textinput-Hint_state_error'))
    errormessagePassw = element(by.className('Textinput-Hint_state_error'))
    video = element(by.linkText('Видео'));
    pictures = element(by.linkText('Картинки'));
    news = element(by.linkText('Новости'));
    maps = element(by.linkText('Карты'));
    market = element(by.linkText('Маркет'));
    translator = element(by.linkText('Переводчик'));
    music = element(by.linkText('Музыка'));
    language = element(by.linkText('Rus'));
    additional = element(by.cssContainingText('.menu__text','ещё'))
    rus = element(by.className('button_arrow_down'))
    eng = element(by.
    cssContainingText('.select__text','English'))
    submit2 = element(by.className('form__save'))



}

module.exports = new Locators()