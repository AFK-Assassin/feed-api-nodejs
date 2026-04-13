const mongoose = require('mongoose');

async function connectDB() {

    await mongoose.connect(process.env.MONGO_KEY);
    console.log("connected to DataBase")
}


module.exports = connectDB;