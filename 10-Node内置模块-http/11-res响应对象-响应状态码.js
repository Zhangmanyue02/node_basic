const http = require("http")

const server = http.createServer((req, res) => {
    // 1.响应状态码
    res.statusCode = 999
    res.statusMessage = "user"

    /* 响应状态码和响应消息都是人为规定的 */

    res.end("hello world")
})

server.listen(3000, () => {
    console.log("server start");
})