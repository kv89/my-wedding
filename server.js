var express = require("express");
var app     = express();
var path    = require("path");



    app.use(express.static(__dirname + '/public'));
    app.use(express.static(__dirname + '/public'));
	app.use(express.static(__dirname + '/'));



app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.listen(7777, function(){
	console.log('running on port 7777');
});
