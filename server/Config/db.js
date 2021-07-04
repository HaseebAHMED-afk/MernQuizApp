const mongoose = require('mongoose');

const connectDB = async ()=> {
    try {
        const conn = await mongoose.connect('mongodb://localhost:27017/geekQuizDB',{
            useCreateIndex:true,
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useFindAndModify: false
        });
        console.log('MongoDB connection successful');
    } catch (err) {
        console.log(`Error: ${err.message}`);
        process.exit(1);
    }
}

module.exports = connectDB;