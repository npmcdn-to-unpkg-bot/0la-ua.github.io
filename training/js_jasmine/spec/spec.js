//var pow = require('../test.js');
//var isInteger = require('../test.js');
var temp = require('../test.js');


describe('test 1', function() {
	it('isInteger: 8 = true', function () {
	    var result;
	    result = temp.isInteger(8);
	    expect(result).toBe(true);
	});
});

describe('test 2', function() {
	it('pow: 2x3 = 8', function () {
	    var result;
	    result = temp.pow(2, 3);
	    expect(result).toBe(8);
	});
});

describe('test 3', function() {
	it('isUser: "Alex" is legal user', function () {
	    var result;
	    result = temp.isUser('Alex', ['Tim','Diana','Alex','Stefphani']);
	    expect(result).toBe(true);
	});
});