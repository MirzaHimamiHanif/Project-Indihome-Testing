module.exports = function () {
    this.Then(/^Register button is disabled$/, function () {
        driver.then(async function (){
            var assert = require("assert");
            await page.register.performCheckPassEmpty().then(function(result) {
                assert.equal(false, result);
             });
        })
    });
}
