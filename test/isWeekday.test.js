var isWeekday = require('../isWeekday.js')
var assert = require('assert')

describe('The isWeekday function',function(){

  it('should find out if the parameter passed in is a day of the week', function(){
          assert.equal(isWeekday('Saturday'), false);
      });
      it('should find out if the parameter passed in is a day of the week', function(){
         assert.equal(isWeekday('Monday'), true);

      });

});
