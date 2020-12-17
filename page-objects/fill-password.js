module.exports = {
    url: "https://dev-dashboard.vutura.io/",

    elements: {
        fillPassword: by.xpath("//input[@id='password-login']")
    },

    performFill: function () {
        var selector = page.fillPassword.elements.fillPassword;
        return driver.findElement(selector).sendKeys(shared.id.password);
    }
};
