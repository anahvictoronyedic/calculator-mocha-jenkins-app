
const request = require('request');

const urlPrefix = 'http://localhost/';

describe("Calculator",function(){
	describe("Calculator Addition",function(){
		it("should sum up two numbers",function(done){
			request(urlPrefix+'add/2/3',function(err,res,body){
				assert.strictEqual(body.answer,5);
				done();
			});
		});
	});
	
	describe("Calculator Subtraction",function(){
		it("should subtract two numbers",function(done){
			request(urlPrefix+'diff/8/5',function(err,res,body){
				assert.strictEqual(body.answer,3);
				done();
			});
		});
	});
});