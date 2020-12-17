module.exports = function () {
    this.Given(/^user browse dashboard page 1$/, function () {
        helpers.loadPage(shared.pages.indihomeDashboard)
    });

    this.Given(/^user click button masuk 1$/, function () {
        driver.then(function (){
            return page.login.performClickMasuk()
        })
    });

    this.Given(/^user fill email or phone number field 1$/, function () {
        driver.then(function (){
            return page.login.performFillEmail(shared.id.emailInvalid)
        })
    });

    this.When(/^user click login 1$/, function () {
        driver.then(function (){
            return page.login.performClickLogin()
        })
    });

    this.Then(/^user can see notification that account is not registered$/, function () {
        driver.then(function (){
            return page.login.performCheckWarning()
        })
    });
}
