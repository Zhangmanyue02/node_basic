const http = require("http")

setTimeout(() => {
    http.get("http://123.207.32.32:8000/home/multidata", (res) => {
        res.on("data", (data) => {
            const dataObj = JSON.parse(data.toString())
            console.log(dataObj.data.banner.list);
        })
    })
}, 1000)