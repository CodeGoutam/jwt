const express = require('express')
const users = require('./UserSchema')
const router = express.Router()
const jwt = require('jsonwebtoken')
const secretKey = "hemant"

router.post("/login", async (req, res) => {
    const check = await users.findOne(
        { email: req.body.email, password: req.body.password })
    console.log("check value", check);
    if (check!==null) {
        let token = jwt.sign({ userId: check._id, password: check.password }, secretKey, { expiresIn: '1h' })
        res.send({ success: true, authToken: token, check })
        // console.log(check.id);
        // res.send(true)
    }
    else {
        res.send({ success: false })
    }
})
module.exports = router