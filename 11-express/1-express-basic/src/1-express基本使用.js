const express = require("express")

const app = express()

app.get("/home", (req, res) => {
    res.send("hello home")
})

app.listen(9000, () => {
    console.log("api server 9000 start");
    console.log("http://localhost:9000");
})