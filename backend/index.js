const express = require('express')
const app = express()
const cors = require('cors')
const db = require('./db')
db()
app.use(express.json());
app.get("/", (req, res) => {
    console.log("backend running");
    res.send("hello backend")
})
app.use(cors());
app.use("/api", require('./signup'))
app.use("/api", require('./login'))

app.listen(5000)