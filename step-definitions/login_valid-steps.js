module.exports = function () {
    this.Given(/^user browse dashboard page$/, function () {
        helpers.loadPage(shared.pages.indihomeDashboard)
    });

    this.Given(/^user click button masuk$/, function () {
        driver.then(function (){
            return page.login.performClickMasuk()
        })
    });

    this.Given(/^user fill email or phone number field$/, function () {
        driver.then(function (){
            return page.login.performFillEmail(shared.id.emailValid)
        })
    });

    this.When(/^user click login$/, function () {
        driver.then(function (){
            return page.login.performClickLogin()
        })
    });

    this.Then(/^user can see pop up to verify OTP$/, function () {
        driver.then(function (){
            return page.login.performCheckVerify()
        })
    });
}
