var yearsAgo = require('../yearsAgo.js')
var assert = require('assert')

describe('The yearsAgo function',function(){

  it('should return how many years ago ', function(){
          assert.equal(yearsAgo('2010'),'7');
      });

});
