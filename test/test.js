
const request = require('request');
const assert = require('assert');

const urlPrefix = 'http://localhost:3000/';

describe("Calculator",function(){
	describe("Calculator Addition",function(){

		it("should reply with 200 status code",function(done){
			
			request(urlPrefix+'add/2/3',function(err,res,body){	
				assert.equal(res.statusCode,200);
				done();
			});
			
		});
		
		it("should sum up two numbers",function(done){
			
			request(urlPrefix+'add/2/3',function(err,res,body){	
			
				body = JSON.parse(body);

				assert.equal(body['answer'],5);
				done();
			});

			
		});
		
	});
});