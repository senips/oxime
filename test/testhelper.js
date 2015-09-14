var webdriver = require('selenium-webdriver');

//singleton
//no ioc but deal with it for now..
if (!global.driverInited){
  global.driverInited = true;
  global.InternalDriver = new webdriver.Builder().
     withCapabilities(webdriver.Capabilities.firefox()).
     build();
}
