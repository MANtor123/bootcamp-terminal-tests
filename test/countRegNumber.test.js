var countRegNumber = require('../countRegNumber.js')
var assert = require('assert')

describe('The countRegNumber function',function(){

  it('should return the reg number in the string ', function(){
          assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328'),'3');
      });

});
