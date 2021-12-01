var express = require('express')

var Create = function(req,res){req.body.First_name
	console.log(data);
	var register_post = new Register_Post(
	{
		First_name: req.body.First_name,
		Last_name: req.body.Last_name,
		Email: req.body.Email,
		Password: req.body.Password,
		Gender: req.body.Gender

	})
	register_post.save(function(err, result){
		if(err){
			console.log(err)
		}else{
			console.log('result')
			console.log(result)
			res.send(result);
		}
	})
}

	module.exports = {Create, read, update, delete};