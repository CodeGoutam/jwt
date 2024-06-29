const mongoose = require('mongoose')
const users = require('./UserSchema')
require('dotenv').config();
const db = async () => {
    try {
        const res = await mongoose.connect(`${process.env.DATABASE_URL}`)
        console.log('db connected')
        // global.userData = users.find({}, (err, users) => { });
        // console.log(global.userData)
    } catch (error) {
        console.log("db not connected")
    }
}
module.exports = db;