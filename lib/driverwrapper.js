//Senthil Maruthaiappan
//https://github.com/senips/seleniumwrap

var Q = require('q');

function DriverWrapper(driver) {
    this.internalDriver = driver;
    this.inited = false;
}

DriverWrapper.prototype.getDriver = function () {
    return this.internalDriver;
};

DriverWrapper.prototype.launch = function () {
    if (!this.inited) {
        this.inited = true;
        this.internalDriver = this.internalDriver.build();
    }
    return this.internalDriver;
};

DriverWrapper.prototype.openUrl = function (url) {
    return this.internalDriver.get(url);
};

DriverWrapper.prototype.getTitle = function (url) {
    return this.internalDriver.getTitle();
};

// locator : {className: string} | {css: string} | {id: string} | {js: string} |
// {linkText: string} | {name: string} | {partialLinkText: string} |
// {tagName: string} | {xpath: string})
//for example:   findElement( {id:'foo' } );

DriverWrapper.prototype.getElement = function (locator) {
    return this.internalDriver.findElement(locator)
};

exports.DriverWrapper = DriverWrapper;
