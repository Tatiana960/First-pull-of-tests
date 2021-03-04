//let singleton = require('../conf/singletone')

let userproperties = require('../conf/userproperties')



class Methods {



    async ignoreAngular() {

        await browser.waitForAngularEnabled(false);
    }

    async getSite() {

        await browser.get(userproperties.siteAddress)

    }


}

module.exports = new Methods()