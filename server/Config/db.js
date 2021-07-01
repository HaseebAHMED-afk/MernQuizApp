const mongoose = require('mongoose');

const connectDB = async ()=> {
    try {
        const conn = await mongoose.connect('mongodb://localhost:27017/expensetrackerDB',{
            useCreateIndex:true,
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log('MongoDB connection successful');
    } catch (err) {
        console.log(`Error: ${err.message}`);
        process.exit(1);
    }
}

module.exports = connectDB;