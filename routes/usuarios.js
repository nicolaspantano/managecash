const express = require('express');
//import UserControllers from '../controllers/userControllers.js';
//import checkUserAuth from '../middleware/authmiddleware.js';
const router = express.Router();
const Usuario = require("../models/usuario.js");
// route level middleware

//router.use('/changepassword', checkUserAuth)
//router.use('/loggeduser', checkUserAuth)




// public routes 
//router.post('/register', UserControllers.userRegistration);
//router.post('/login', UserControllers.userLogin);
//router.post('/send-reset-password-email', UserControllers.sendUserPasswordResetEmail);
//router.post('/reset-password/:id/:token', UserControllers.userPasswordReset);
router.get('/', async (req, res) => {
	try{
		const newUser = new Usuario({
        	email: "ñañaña@gmail.com",
        	password: "1234",
        })

        await newUser.save()

		const users = await Usuario.find()
		res.status(200).json({
			status: "success",
			message: "All users",
			users: users
		})
	}
	catch (error) {
		res.status(500).json({
			status: "failed",
			message: error.message
		})
	}
})

//protected routes
//router.post('/changepassword', UserControllers.changeUserPassword);
//router.get('/loggeduser', UserControllers.loggedUser);



module.exports = router;