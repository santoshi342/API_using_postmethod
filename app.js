const express = require('express');
const app = express();
const router = require('./routes/routeindex');
const path = require('path')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

var url = 'mongodb://localhost:27017/test'

mongoose.connect(url).then(function(con){
	console.log('database connection done')
});
app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/',  router) ; // for middleware 
// For server connection 

app.listen(3000, function(err, result){
	if(err){
		console.log(err)
	}else{
		//console.log('server connection done')
	}

});


