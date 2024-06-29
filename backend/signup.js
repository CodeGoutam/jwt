const express = require('express')
const user = require('./UserSchema')
const router = express.Router()
const jwt = require('jsonwebtoken')
const secretKey = "hemant"
router.post('/signup', async (req, res) => {
    try {
        const userDetail = await user.create({
            email: req.body.email,
            password: req.body.password
        })
        console.log("sending data to db = ", userDetail);
        const token = jwt.sign({ userId: userDetail._id, password: userDetail.password }, secretKey, { expiresIn: '1h' })
        res.send({ success: true, authToken: token })
    } catch (error) {
        console.log("error in sending data to db", error)
        res.send({ success: false })
    }
})
module.exports = router