module.exports = function () {
    this.Then(/^User can see alert message 4$/, function () {
        driver.then(function (){
            return page.register.performCheckAgreeEmpty()
        })
    });
}
