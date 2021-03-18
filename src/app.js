
//importing node framework
var express = require(‘express’);
 
var app = express();

//Respond with "hello world" for requests that hit our root "/"
app.get(`/:type/:a/:b`, function (req, res) {
	
	const {a,b} = req.params;
	
	switch(req.params.type){
		case 'add':
		return res.send({
			answer:a+b,
		});
		break;
	}
	
	return res.badRequest();
});

//listen to port 3000 by default
app.listen(process.env.PORT || 3000);
 
module.exports = app;