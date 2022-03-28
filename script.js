"use strict";
(function() {

  window.addEventListener("load", init);

  /**
   * called when page loads
   * note: not strictly necessary in terms of functionality to include the async/await here since
   * there is nothing relying/after the result of the call to constructMessage but is included to
   * demonstrate that async functions should be await-ed
   */
  async function init() {
    await constructMessage();
  }

  /**
   * async behavior shown
   */
  async function constructMessage() {
    try {
      let p1 = await m3();
      let p2 = m1(p1);
      let p3 = await m2(p2);
      console.log(p3);
    } catch (err) {
      console.error(err);
    }
  }

  /**
   * m1 message
   * @param {String} value message
   * @returns {String} message
   */
  function m1(value) {
    return value + " lemon squeezy!";
  }

  /**
   * m2 message
   * @param {String} value message
   * @return {String} promise value
   */
  function m2(value) {
    return new Promise(function(resolve) {
      setTimeout(function() {
        resolve(value + " I'm gettin the hang of it now");
      }, 2000);
    });
  }

  /**
   * m3 message
   * @return {String} promise value
   */
  function m3() {
    return new Promise(function(resolve) {
      setTimeout(function() {
        resolve("easy peasy");
      }, 1000);
    });
  }
})();