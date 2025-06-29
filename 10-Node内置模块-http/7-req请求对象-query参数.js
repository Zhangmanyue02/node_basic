const http = require("http")
const qs = require("querystring")
const url = require("url")

const server = http.createServer((req, res) => {
    // /login?username=zmy&password=123
    if (req.url === "/login?username=zmy&password=123") {
        const reqUrl = req.url
        const parseReqUrl = url.parse(reqUrl)
        console.log("parseReqUrl:", parseReqUrl);

        const { username, password } = qs.parse(parseReqUrl)
        console.log(username, password);
    }
    res.end("hello world")
})

server.listen(3000, () => {
    console.log("server start");
})