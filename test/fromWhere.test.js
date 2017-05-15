var fromWhere = require('../fromWhere.js')
var assert = require('assert')

describe('the fromWhere function', function(){
  it('should find out if the parameter passed in is a reg number from Bellville', function(){
          assert.equal(fromWhere('CY'), true);
      });

      it('should find out if the parameter passed in is a reg number from Paarl', function(){
         assert.equal(fromWhere('CJ'), true);

      });

  	it('should find out if the parameter passed in is a reg number from Cape Town', function(){
         assert.equal(fromWhere('CA'), false);

      });
  	it('should find out if the parameter passed in is a reg number from some other place!', function(){
         assert.equal(fromWhere('CL'), false);

      });
})
