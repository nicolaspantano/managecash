const express = require('express')
const cors = require("cors")
const {config} = require('dotenv')
const app = express()
const connectDB = require('./config/db.js');
const userRoutes = require('./routes/usuarios.js');


app.use(cors(
    {
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization']
    }
));

config({
    path: './.env'
});

const PORT = process.env.PORT || 5000;
connectDB(process.env.DATABASE_URL);

app.use(express.json());

app.get('/', (req, res) => {
    res.send(`
    <h1> Welcome to Nodejs Express Mongodb Auth Api </h1>
     `)
})
// load all routes
app.use('/api/v1/user', userRoutes);



app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`)
})



//dotenv permite usar .env file para variables de entorno
/*require("dotenv").config()
const PORT = process.env.PORT || 5000;
connectDB(process.env.DATABASE_URL);
const {readdirSync} = require("fs")

//app.use("/", require('mongoose'));
require('./mongoose');

const mongoose = require('mongoose');


//agrega todas las rutas
readdirSync("./routes").map((file) => app.use("/", require("./routes/" + file)))

app.get('/', (req, res) => {
  res.send('Hellos World!');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})*/