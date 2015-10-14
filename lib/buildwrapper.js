
//Senthil Maruthaiappan
//https://github.com/senips/seleniumwrap

var webdriver = require('selenium-webdriver');
var wrapper = require('../lib/driverwrapper')
var promise = require('selenium-webdriver').promise;
var flow = promise.controlFlow();

/**
 *  modified version of selenium code so that it can be used with
 *    any test frameworks
 *
 * Wraps a function on BDD interface so it runs inside a
 * webdriver.promise.ControlFlow and waits for the flow to complete before
 * continuing.
 * @param {!Function} globalFn The function to wrap.
 * @return {!Function} The new function.
 */
function wrapped(globalFn) {
  return function() {
    if (arguments.length === 1) {
      return globalFn(makeAsyncTestFn(arguments[0]));
    }
    else if (arguments.length === 2) {
      return globalFn(arguments[0], makeAsyncTestFn(arguments[1]));
    }
    else {
      throw Error('Invalid # arguments: ' + arguments.length);
    }
  };
}

/**
 * Make a wrapper to invoke caller's test function, fn.  Run the test function
 * within a ControlFlow.
 *
 *
 * @param {Function} fn
 * @return {Function}
 */
function makeAsyncTestFn(fn) {
  var async = fn.length > 0; // if test function expects a callback, its "async"
console.log('entering makeAsync ');
  var ret = function(done) {
    var runnable = this.runnable();
    var mochaCallback = runnable.callback;
    runnable.callback = function() {
      flow.reset();
      return mochaCallback.apply(this, arguments);
    };

    var testFn = fn.bind(this);
    flow.execute(function controlFlowExecute() {
      return new promise.Promise(function(fulfill, reject) {
        if (async) {
          // If testFn is async (it expects a done callback), resolve the promise of this
          // test whenever that callback says to.  Any promises returned from testFn are
          // ignored.
          testFn(function testFnDoneCallback(err) {
            if (err) {
              reject(err);
            } else {
              fulfill();
            }
          });
        } else {
          // Without a callback, testFn can return a promise, or it will
          // be assumed to have completed synchronously
          fulfill(testFn());
        }
      }, flow);
    }, runnable.fullTitle()).then(seal(done), done);
  };

  ret.toString = function() {
    return fn.toString();
  };

  return ret;
}


//singleton global
//no ioc but deal with it for now..
if (!global.gBrowserClient){

  //read from config later point....
  var internalDriver = new webdriver.Builder().
     withCapabilities(webdriver.Capabilities.chrome()); //'ie'

  global.gBrowserClient = new wrapper.DriverWrapper(internalDriver);

}
