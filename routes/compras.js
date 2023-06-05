const express = require("express")
const router = express.Router()

router.get("/compras", (req, res) => {
	res.send("Lista de compras");
})

module.exports = router