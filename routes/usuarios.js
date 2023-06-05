const express = require("express")
const router = express.Router()

var usuarios = [
	{
		"name": "Kibo Clay",
		"email": "a@protonmail.net"
	},
	{
		"name": "Lionel Levy",
		"email": "ornare@yahoo.net"
	},
	{
		"name": "Isabella Joyner",
		"email": "integer.vulputate@aol.couk"
	},
	{
		"name": "Paloma Wiggins",
		"email": "rutrum@aol.edu"
	},
	{
		"name": "Quail Tyson",
		"email": "ac@icloud.couk"
	}
];



router.get("/usuarios", (req, res) => {
	res.send(usuarios);
})

module.exports = router