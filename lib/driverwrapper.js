
function DriverWrapper (driver) {
    this.driver = driver;

}

DriverWrapper.prototype.getDriver = function(){
  return this.driver;
};

DriverWrapper.prototype.openUrl = function(url){
    console.log(this.driver);
   this.driver.get(url);
};



exports.DriverWrapper = DriverWrapper;
