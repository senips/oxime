
var Q = require('q');

function DriverWrapper (driver) {
  this.internalDriver = driver;
  this.inited = false;
}

DriverWrapper.prototype.getDriver = function(){
  return this.internalDriver;
};

DriverWrapper.prototype.init = function(){
  if (!this.inited){
    this.inited=true;
    this.internalDriver = this.internalDriver.build();
  }
};

DriverWrapper.prototype.openUrl = function(url){
  this.init();
  return this.internalDriver.get(url);
};

DriverWrapper.prototype.getTitle = function(url){
  return this.internalDriver.getTitle();
};



exports.DriverWrapper = DriverWrapper;
