module.exports = function () {
    this.Then(/^User can see alert message$/, function () {
        driver.then(function (){
            return page.register.performCheckEmailEmpty()
        })
    });
}
