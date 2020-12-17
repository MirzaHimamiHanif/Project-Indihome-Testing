module.exports = function () {
    this.Given(/^user browse check availability page 1$/, function () {
        helpers.loadPage(shared.pages.indihomeAvailability)
    });
    
    this.Given(/^user can change location 1$/, function () {
        driver.then(function (){
            return page.availability.performFill(shared.id.unavailableAddress)
        })
    });

    this.When(/^user click cek ketersediaan 1$/, function () {
        driver.then(function (){
            return page.availability.performClick()
        })
    });

    this.Then(/^user know the service is unavailable 1$/, function () {
        driver.then(function (){
            return page.availability.performCheckInvalid()
        })
    });
}