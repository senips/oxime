var webdriver = require('selenium-webdriver');
var wrapper = require('../lib/driverwrapper')

//singleton global
//no ioc but deal with it for now..
if (!global.gBrowserClient){

  //read from config later point....
  var internalDriver = new webdriver.Builder().
     withCapabilities(webdriver.Capabilities.chrome());

  global.gBrowserClient = new wrapper.DriverWrapper(internalDriver);
  
}
