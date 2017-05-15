var regCheck = require('../regCheck.js')
var assert = require('assert')

describe('The regCheck function',function(){

it('should found out if the parameter passed in is a reg number from paarl',function(){
  assert.equal(regCheck('CY'),true)
});

});
