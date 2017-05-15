var countAllFromTown = require('../countAllFromTown.js')
var assert = require('assert')

describe('The countAllFromTown function', function(){

    it('should find out the registration number for that specific town', function(){
      var fromStellie = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
        assert.deepEqual(fromStellie,3);
    });

});
