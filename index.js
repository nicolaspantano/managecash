const express = require('express')
const app = express()

const cors = require("cors")
app.use(cors())

//dotenv permite usar .env file para variables de entorno
require("dotenv").config()
const port = process.env.port || 8000
const {readdirSync} = require("fs")


//agrega todas las rutas
readdirSync("./routes").map((file) => app.use("/", require("./routes/" + file)))

app.get('/', (req, res) => {
  res.send('Hellos World!');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})