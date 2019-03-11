var assert = require('assert');
Object.assign(global, require('../server/functions.js'));


// online example
describe('Array', function() {
	describe('#indexOf()', function() {
		it('should return -1 when the value is not present', function() {
			assert.equal([1, 2, 3].indexOf(4), -1);
		});
	});
});


describe('functions', function(){
	describe('#validStart()', function(){
		it('should return true when value is between 3 and 8', function(){
				let testArray = new Array(7);
				assert.equal(validStart(testArray), true);
		});
		it('should return false when value is less than 3', function(){
				let testArray = new Array(2);
				assert.equal(validStart(testArray), false);
		})
		it('should return false when value is greater than 8', function(){
				let testArray = new Array(9);
				assert.equal(validStart(testArray),false);
		});
	});

});
