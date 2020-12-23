module.exports = function () {
    this.Then(/^User can see alert message 1$/, function () {
        driver.then(function (){
            return page.register.performCheckNameEmpty()
        })
    });
}
