const http = require("http")

const server = http.createServer((req, res) => {
    // 设置响应状态码
    res.statusCode = 200
    // 设置响应消息
    res.statusMessage = "OK"
    res.setHeader("content-type", "text/html;charset=utf-8")
    // 设置跨域
    res.setHeader("Access-Control-Allow-Origin", "*")
    // 设置响应体长度
    res.setHeader("content-length", 100000)
    // 响应体
    res.end("hello zhang")
})
server.listen(3000, () => {
    console.log("server start");
})