
// import mongoose from "mongoose";
const mongoose = require('mongoose');
const mongooseUri = "mongodb://localhost:27017/inotebookDb"
//     // 1. connect the mongoDB with this local connection.
const connectToMongo = () => {
    mongoose.connect(mongooseUri)
        .then(() => {
            console.log("-------- Mongoose Db Connected Successfully -----------")
        }).catch((error) => {
            console.log("---------- Mongoose Db Connection Failed")
        });
}


module.exports = connectToMongo