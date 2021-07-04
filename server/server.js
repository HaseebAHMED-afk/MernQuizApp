const express = require('express')
const cors = require('cors')
const connectDB = require('./Config/db')
require('dotenv').config()

const app = express();

app.use(cors())
app.use(express.json())

connectDB()

const userRouter = require('./Routes/User')

app.use('/user' , userRouter)


app.listen(process.env.PORT || 5000 , ()=>{
    console.log('Process running on port 5000');
})