const express = require('express')
const cors = require('cors')
const connectDB = require('./Config/db')
require('dotenv').config()

const app = express();

app.use(cors())

connectDB()


app.listen(process.env.PORT || 5000 , ()=>{
    console.log('Process running on port 5000');
})