module.exports = function () {
    this.Given(/^User browse Page Dashboard$/, function () {
        helpers.loadPage(shared.pages.indihomeDashboard)
    });

    this.Given(/^Click button “Daftar Akun$/, function () {
        driver.then(function (){
            return page.register.performClickDaftarAkun()
        })
    });

    this.Given(/^fill email field$/, function () {
        driver.then(function (){
            return page.register.performFillEmail(shared.id.emailnew)
        })
    });

    this.Given(/^fill Nama field$/, function () {
        driver.then(function (){
            return page.register.performFillName(shared.id.name)
        })
    });

    this.Given(/^fill Nomor Hp$/, function () {
        driver.then(function (){
            return page.register.performFillTelp(shared.id.telp)
        })
    });

    this.Given(/^choose jenis kelamin$/, function () {
        driver.then(function (){
            return page.register.performSelectGender()
        })
    });

    this.Given(/^fill Password field$/, function () {
        driver.then(function (){
            return page.register.performFillPass(shared.id.pass)
        })
    });

    this.Given(/^fill Konfirmasi Password field$/, function () {
        driver.then(function (){
            return page.register.performFillConfPass(shared.id.pass)
        })
    });

    this.Given(/^Click saya setuju dengan syarat dan ketentuan$/, function () {
        driver.then(function (){
            return page.register.performClickAgreement()
        })
    });

    this.When(/^Click button “Register”$/, function () {
        driver.then(function (){
            return page.register.performClickRegister()
        })
    });

    this.Then(/^user can see popup Kode Verifikasi$/, function () {
        driver.then(function (){
            return page.register.performCheckVerify()
        })
    });
}
