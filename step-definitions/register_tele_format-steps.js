module.exports = function () {
    this.Given(/^fill Nomor Hp 2$/, function () {
        driver.then(function (){
            return page.register.performFillTelp(shared.id.telpInvalid)
        })
    });

    this.Then(/^User can see alert that handphone format must correct$/, function () {
        return page.register.performCheckTeleFormat()
    });
}
