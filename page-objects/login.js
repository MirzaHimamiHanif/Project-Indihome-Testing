module.exports = {
    url: shared.pages.indihomeDashboard,

    elements: {
        clickMasuk: by.xpath("//body/div[@id='__next']/div[1]/div[1]/div[2]/div[1]/div[5]/nav[1]/ul[1]/button[2]"),
        fillEmail: by.xpath("//input[@placeholder='Email Atau Nomor HP']"),
        clickLogin: by.xpath("//button[contains(text(),'Login')]"),
        checkVerify: by.xpath("//h1[normalize-space()='Verifikasi Akun']"),
        checkWarning: by.xpath("//div[@class='container containerRegister']//b[1]")
    },

    performClickMasuk: async function () {
        var selector = page.login.elements.clickMasuk;
        await driver.wait(until.elementLocated(selector));

        return driver.findElement(selector).click();
    },

    performFillEmail: async function (email) {
        var selector = page.login.elements.fillEmail;
        await driver.wait(until.elementLocated(selector));
        return driver.findElement(selector).sendKeys(email);
    },

    performClickLogin: async function () {
        var selector = page.login.elements.clickLogin;
        await driver.wait(until.elementLocated(selector));
        return driver.findElement(selector).click();
    },

    performCheckVerify: async function () {
        var selector = page.login.elements.checkVerify;
        await driver.wait(until.elementLocated(selector));
        return driver.findElement(selector).click();
    },

    performCheckWarning: function () {
        var selector = page.login.elements.clickMasuk;
        return driver.findElement(selector);
    }
};
