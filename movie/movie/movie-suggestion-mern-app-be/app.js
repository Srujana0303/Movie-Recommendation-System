require('dotenv').config()
const express = require('express')
const app = express()
const movieRouter = require('./routes/movieRoute')
const mongoose = require('mongoose')
const cors = require('cors')
const PORT = 3500

mongoose.connect(process.env.DB_URL);
const db = mongoose.connection
db.on('error', (errorMessage)=>{console.log(errorMessage)})
db.once('open', ()=>{console.log('Connected successfully to the database!');})

app.use(express.json())
app.use(cors())

app.use('/api/v1/movie', movieRouter);

app.listen(PORT, ()=>{
    console.log(`Server Running on http://localhost:${PORT}/api/v1/movie/`);
})