const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    preferences: {
        type: Object, // You can define a more specific schema based on your requirements
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const User = mongoose.model('User', userSchema);
module.exports = User;

const connectDB = async () => { 
    const uri = "mongodb+srv://detroit1234:detroit1234@cluster0.kgnho.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected successfully");

    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
        console.log("MongoDB URI:", );

        process.exit(1);
    }
};

module.exports = connectDB;
