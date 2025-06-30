/* 
    可读流
*/

const fs = require("fs")
const rs = fs.createReadStream("./readStream.txt", {
    start: 3,
    end: 8,
    highWaterMark: 4
})

// 可读流的事件
rs.on("open", (fd) => {
    console.log("文件被打开");
})

rs.on("data", (chunk) => {
    console.log(chunk);
})

rs.on("end", () => {
    console.log("文件读取结束");
})

rs.on("close", () => {
    console.log("文件关闭");
})