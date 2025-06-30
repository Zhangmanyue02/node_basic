const axios = require("axios")

setTimeout(() => {
    axios.get("http://123.207.32.32:8000/home/multidata").then((res) => {
        console.log(res.data.data.banner.list);
    })
}, 1000)