const fs = require("fs")

// 1.读取文本
fs.readFile("aaa.txt", { encoding: "utf-8" }, (err, data) => {
    console.log(data);
})

// 2.读取图片
fs.readFile('./image.png', (err, data) => {
    console.log(data);
})