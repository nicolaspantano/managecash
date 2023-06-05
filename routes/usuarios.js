const express = require("express")
const router = express.Router()

const Usuario = require('../models/usuario.js')

router.get('/usuarios', async (req, res) => {
	try
	{
		const usuarios = await Usuario.find()
		console.log(usuarios);

		/*res.render("usuarios", {
			arrayUsuarios: usuarios
		})*/

		res.json({arrayUsuarios: usuarios})

	} catch (error) {
		console.log(error)
	}

})

module.exports = router