const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const mongoUrl = "mongodb+srv://avinashbharat15081947:Avinash2001@cluster0.t53d5cc.mongodb.net/abroadDB";
        await mongoose.connect(mongoUrl);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        process.exit(1); 
    }
};
module.exports = connectDB;
