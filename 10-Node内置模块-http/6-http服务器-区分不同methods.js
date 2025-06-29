const http = require("http")

const server = http.createServer((req, res) => {
    console.log(req.url);
    console.log("---------------------");
    console.log(req.method);
    console.log("---------------------");
    console.log(req.headers);
    if (req.url === "/" && req.method === "GET") {
        res.end("首页")
    } else if (req.url === "/login" && req.method === "POST") {
        // res.end("登录成功~")
        res.end("登录成功~")
    } else if (req.url === "/lyric") {
        res.end("天空好想下雨, 我好想住你隔壁!")
    } else {
        res.end("404 Not Found")
    }
})
server.listen(3000, () => {
    console.log("server start");
})
