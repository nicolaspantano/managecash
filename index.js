const express = require('express')
const app = express()

const cors = require("cors")
app.use(cors())

//dotenv permite usar .env file para variables de entorno
require("dotenv").config()
const port = process.env.port || 3000
const {readdirSync} = require("fs")

//app.use("/", require('mongoose'));
//require('./mongoose');

/*const mongoose = require('mongoose');

const user = 'new_user_1';
const password = 'pnH4hlnpa2GwyoHv';
const databaseName = 'sample_airbnb';
const uri = `mongodb+srv://${user}:${password}@cluster0.3aio0bs.mongodb.net/${databaseName}?retryWrites=true&w=majority`;
mongoose.connect(uri, 
  {
    useNewUrlParser: true, useUnifiedTopology: true
  }
)
.then(() => console.log('Base de datos conectada'))
.catch(e => console.log(e))*/


//agrega todas las rutas
readdirSync("./routes").map((file) => app.use("/", require("./routes/" + file)))

app.get('/', (req, res) => {
  res.send('Hellos World!');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})