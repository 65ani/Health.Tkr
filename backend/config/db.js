const mongoose = require ('mongoose');

const connectDB = async() => {

    try{

        await mongoose.connect(
            'mongodb+srv://health_tracker_admin:health_tracker_admin@health-tracker.ty7cl.mongodb.net/?retryWrites=true&w=majority&appName=health-tracker');
        console.log("connected to mongoDB");
    } catch(err){
        console.error('Failed to connect to MongoDB', err);
        process.exit(1);

    }
};
module.exports =connectDB;