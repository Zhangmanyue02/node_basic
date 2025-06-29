const http = require("http")

const server = http.createServer((req, res) => {
    req.setEncoding("utf-8")

    let isLogin = false
    req.on("data", (data) => {
        const { username, password } = JSON.parse(data)
        console.log(username, password);
        if (username && password) {
            isLogin = true
        } else {
            isLogin = false
        }
    })

    req.on("end", () => {
        if (isLogin) {
            res.end("登录成功")
        } else {
            res.end("登录失败")
        }
    })
})

server.listen(3000, () => {
    console.log("server start");
})