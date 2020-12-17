module.exports = {
    url: shared.pages.indihomeAvailability,

    elements: {
        fillAddress: by.xpath("//body/div[@id='__next']/div[1]/div[4]/div[2]/div[1]/div[8]/div[2]/div[1]/div[1]/div[4]/div[1]/div[1]/div[2]/input[1]"),
        clickCheck: by.xpath("//body/div[@id='__next']/div[1]/div[4]/div[2]/div[1]/div[8]/div[2]/div[1]/div[1]/div[4]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[3]/button[1]"),
        checkAvailableMessage1: by.xpath("//h3[contains(text(),'Layanan IndiHome tersedia di lokasi Anda')]"),
        checkAvailableMessage2: by.xpath("//p[contains(text(),'Perkiraan pemasangan : 3-5 Hari')]"),
        checkUnavailableMessage1: by.xpath("//h3[contains(text(),'Layanan IndiHome saat ini belum tersedia di lokasi')]"),
        checkUnavailableMessage2: by.xpath("//p[contains(text(),'Tim kami akan segera menginformasikan apabila di l')]")
    },

    performFill: async function (address) {
        var selector = page.availability.elements.fillAddress
        await driver.wait(until.elementLocated(selector));
        return driver.findElement(selector).sendKeys(address);
    }, 

    performClick: async function () {
        var selector = page.availability.elements.clickCheck
        await driver.wait(until.elementLocated(selector));
        return driver.findElement(selector).click();
    },

    performCheckValid: async function(){
        var selector1 = page.availability.elements.checkAvailableMessage1
        var selector2 = page.availability.elements.checkAvailableMessage2
        await driver.wait(until.elementLocated(selector1));
        await driver.wait(until.elementLocated(selector2));
        return driver.findElement(selector1)
    },
    
    performCheckInvalid: async function(){
        var selector1 = page.availability.elements.checkUnavailableMessage1
        var selector2 = page.availability.elements.checkUnavailableMessage2
        await driver.wait(until.elementLocated(selector1));
        await driver.wait(until.elementLocated(selector2));
        return driver.findElement(selector1)
    }

};
