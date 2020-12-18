module.exports = function () {
    this.Given(/^User browse Page Dashboard 1$/, function () {
        helpers.loadPage(shared.pages.indihomeDashboard)
    });

    this.Given(/^Click button “Daftar Akun 1$/, function () {
        driver.then(function (){
            return page.register.performClickDaftarAkun()
        })
    });

    this.Given(/^fill email field 1$/, function () {
        driver.then(function (){
            return page.register.performFillEmail(shared.id.emailnew)
        })
    });

    this.Given(/^fill Nama field 1$/, function () {
        driver.then(function (){
            return page.register.performFillName(shared.id.name)
        })
    });

    this.Given(/^fill Nomor Hp 1$/, function () {
        driver.then(function (){
            return page.register.performFillTelp(shared.id.telp)
        })
    });

    this.Given(/^choose jenis kelamin 1$/, function () {
        driver.then(function (){
            return page.register.performSelectGender()
        })
    });

    this.Given(/^fill Password field 1$/, function () {
        driver.then(function (){
            return page.register.performFillPass(shared.id.pass)
        })
    });

    this.Given(/^fill Konfirmasi Password field 1$/, function () {
        driver.then(function (){
            return page.register.performFillConfPass(shared.id.pass)
        })
    });

    this.Given(/^Click saya setuju dengan syarat dan ketentuan 1$/, function () {
        driver.then(function (){
            return page.register.performClickAgreement()
        })
    });

    this.When(/^Click button “Register” 1$/, function () {
        driver.then(function (){
            return page.register.performClickRegister()
        })
    });

    this.Then(/^user can see alert message$/, function () {
        driver.then(function (){
            return page.register.performCheckAlert()
        })
    });
}
