module.exports = {
    url: shared.pages.indihomeDashboard,

    elements: {
        clickDaftarAkun: by.xpath("//ul[@class='ml-auto d-none d-lg-block navbar-nav']//button[1]"),
        fillEmail: by.xpath("//input[@placeholder='Email']"),
        fillName: by.xpath("//input[@placeholder='Nama']"),
        fillTelp: by.xpath("//input[@placeholder='Nomor HP']"),
        clickGender: by.xpath("//div[@role='listbox']"),
        selectGender: by.xpath("//div[@class='active selected item']"),
        fillPass: by.xpath("//input[@placeholder='Password']"),
        fillConfPass: by.xpath("//input[@placeholder='Konfirmasi Password']"),
        clickAgreement: by.xpath("//label[@for='checkbox']"),
        clickRegister: by.xpath("//button[normalize-space()='Register']"),
        checkVerify: by.xpath("//h1[normalize-space()='Verifikasi Akun']"),
        checkAlert: by.xpath("//h3[normalize-space()='Gagal']"),
        checkEmailEmpty: by.xpath("//b[contains(text(),'Email tidak boleh kosong')]"),
        checkNameEmpty: by.xpath("//b[contains(text(),'Nama tidak boleh kosong')]"),
        checkTeleEmpty: by.xpath("//b[contains(text(),'No. Handphone tidak boleh kosong')]"),
        checkKonfEmpty: by.xpath("//small[normalize-space()='Maaf konfirmasi password tidak sama.']"),
        checkAgreeEmpty: by.xpath("//p[normalize-space()='Harap centang syarat dan ketentuan terlebih dahulu']"),
        checkEmailFormat: by.xpath("//p[normalize-space()='Format E-mail Salah [10]']"),
        checkTeleFormat: by.xpath("//p[normalize-space()='Msisdn Harus Angka [10]']"),
        
    },

    performClickDaftarAkun: async function () {
        var selector = page.register.elements.clickDaftarAkun;
        await driver.wait(until.elementLocated(selector));

        return driver.findElement(selector).click();
    },

    performFillEmail: async function (email) {
        var selector = page.register.elements.fillEmail;
        await driver.wait(until.elementLocated(selector));
        return driver.findElement(selector).sendKeys(email);
    },

    performFillName: async function (name) {
        var selector = page.register.elements.fillName;
        await driver.wait(until.elementLocated(selector));
        return driver.findElement(selector).sendKeys(name);
    },

    performFillTelp: async function (telp) {
        var selector = page.register.elements.fillTelp;
        await driver.wait(until.elementLocated(selector));
        return driver.findElement(selector).sendKeys(telp);
    },

    performSelectGender: async function () {
        var selector1 = page.register.elements.clickGender;
        var selector2 = page.register.elements.selectGender;

        await driver.wait(until.elementLocated(selector1));
        await driver.wait(until.elementLocated(selector2));

        driver.findElement(selector1).click();
        return driver.findElement(selector2).click();
    },

    performFillPass: async function (pass) {
        var selector = page.register.elements.fillPass;
        await driver.wait(until.elementLocated(selector));
        return driver.findElement(selector).sendKeys(pass);
    },

    performFillConfPass: async function (pass) {
        var selector = page.register.elements.fillConfPass;
        await driver.wait(until.elementLocated(selector));
        return driver.findElement(selector).sendKeys(pass);
    },

    performClickAgreement: async function () {
        var selector = page.register.elements.clickAgreement;

        await driver.wait(until.elementLocated(selector));
        return driver.findElement(selector).click();
    },
    
    performClickRegister: async function () {
        var selector = page.register.elements.clickRegister;

        await driver.wait(until.elementLocated(selector));
        return driver.findElement(selector).click();
    },

    performClickRegister: async function () {
        var selector = page.register.elements.clickRegister;

        await driver.wait(until.elementLocated(selector));
        return driver.findElement(selector).click();
    },

    performCheckVerify: async function () {
        var selector = page.register.elements.checkVerify;

        await driver.wait(until.elementLocated(selector));
        return driver.findElement(selector);
    },

    performCheckAlert: async function () {
        var selector = page.register.elements.checkAlert;

        await driver.wait(until.elementLocated(selector));
        return driver.findElement(selector);
    },

    performCheckEmailEmpty: async function () {
        var selector = page.register.elements.checkEmailEmpty;

        await driver.wait(until.elementLocated(selector));
        return driver.findElement(selector);
    },
    performCheckNameEmpty: async function () {
        var selector = page.register.elements.checkNameEmpty;

        await driver.wait(until.elementLocated(selector));
        return driver.findElement(selector);
    },
    performCheckTeleEmpty: async function () {
        var selector = page.register.elements.checkTeleEmpty;

        await driver.wait(until.elementLocated(selector));
        return driver.findElement(selector);
    },
    
    performCheckPassEmpty: async function () {
        var selector = page.register.elements.clickRegister;
        await driver.wait(until.elementLocated(selector));
        return driver.wait(until.elementLocated(selector)).isEnabled();
    },

    performCheckKonfEmpty: async function () {
        var selector = page.register.elements.checkKonfEmpty;

        await driver.wait(until.elementLocated(selector));
        return driver.findElement(selector);
    },
    performCheckAgreeEmpty: async function () {
        var selector = page.register.elements.checkAgreeEmpty;

        await driver.wait(until.elementLocated(selector));
        return driver.findElement(selector);
    },

    performCheckEmailFormat: async function () {
        var selector = page.register.elements.checkEmailFormat;

        await driver.wait(until.elementLocated(selector));
        return driver.findElement(selector);
    },

    performCheckTeleFormat: async function () {
        var selector = page.register.elements.checkTeleFormat;

        await driver.wait(until.elementLocated(selector));
        return driver.findElement(selector).getText().then(function(result) {
            assert.equal('No. Handphone Harus Angka [10]', result);
        });
    },
};
