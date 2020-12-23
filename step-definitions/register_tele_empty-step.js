module.exports = function () {
    this.Then(/^User can see alert message 2$/, function () {
        driver.then(function (){
            return page.register.performCheckTeleEmpty()
        })
    });
}
