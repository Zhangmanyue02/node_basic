const http = require("http")

const server = http.createServer((req, res) => {
    console.log("headers:", req.headers);
    console.log("content-type:", req.headers['content-type'])
    const token = req.headers['authorization']
    console.log(token)

    res.end("hello world")
})

server.listen(3000, () => {
    console.log("server start");
})