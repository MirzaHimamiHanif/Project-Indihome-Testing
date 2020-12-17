module.exports = function () {
    this.Given(/^user browse check availability page$/, function () {
        helpers.loadPage(shared.pages.indihomeAvailability)
    });
    
    this.Given(/^user can change location$/, function () {
        driver.then(function (){
            return page.availability.performFill(shared.id.availableAddress)
        })
    });

    this.When(/^user click cek ketersediaan$/, function () {
        driver.then(function (){
            return page.availability.performClick()
        })
    });

    this.Then(/^user know the service is available$/, function () {
        driver.then(function (){
            return page.availability.performCheckValid()
        })
    });
}
