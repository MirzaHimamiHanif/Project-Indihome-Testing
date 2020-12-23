module.exports = function () {
    this.Given(/^fill Email field 2$/, function () {
        driver.then(function (){
            return page.register.performFillEmail(shared.id.emailInvalid)
        })
    });

    this.Then(/^User can see alert message 5$/, function () {
        driver.then(function (){
            return page.register.performCheckEmailFormat()
        })
    });
}
