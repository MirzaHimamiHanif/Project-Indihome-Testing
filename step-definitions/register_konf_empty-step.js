module.exports = function () {
    this.Then(/^User can see alert message 3$/, function () {
        driver.then(function (){
            return page.register.performCheckKonfEmpty()
        })
    });
}
