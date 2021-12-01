const express = require('express')
const router = express.Router();
const {Create, read, update, delete} = require('./controller/controller1.js')
const Register_Post = require('../models/regindex.js') // for register page url  

router.post('/create',Create )


//Create API for register 
router.post('/create', function(req, res){
	var data = req.body.First_name
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
})

// Api for login 
router.post('/login', function (req, res){
	var email = req.body.Email;
	var password = req.body.Password;
	// console.log(req.body)
	var data = Register_Post.findOne({Email: email, Password: password})
		.then(function (result){
			if (result=="" || result == "undefine" || result == null)  {
				res.send('invalid user')
			}else{
				res.send('login successful')
			}

		

   })
   
// }) 
// 	.then(function (result){
// 		console.log(result)
//    })
//    .catch(function(error){
// 	console.log(error)
// }) 

})  

    // api for delete 
    router.delete('/deleteData', function(req, res) {
	let _id = req.body._id;
	console.log(req.body)
	Register_Post.findByIdAndDelete(_id, function(err, result){
		if (err) {
			console.log(err)
		}else{
			res.send(result)
		}
	})
    });  
    module.exports = router

