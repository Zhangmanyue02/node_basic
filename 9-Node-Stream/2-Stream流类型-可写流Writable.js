const fs = require("fs")

const ws = fs.createWriteStream("./writeStream.txt", {
    flags: "r+" //r+:可读可写，文件不存在会报错
})

ws.on("open", (fd) => {
    console.log("----文件打开----");
})

ws.write("coderwhy", () => {
    console.log("写入完成");
})
ws.write("ajskdafj", () => {
    console.log("写入完成");
})
ws.write("xs", () => {
    console.log("写入完成");
})

// 必须调用 end() 才能触发 finish 和 close
ws.end("最后的内容", () => {
    console.log("写入操作已结束");
});

ws.on("finish", () => {
    console.log("写入完毕");
})

ws.on("close", () => {
    console.log("----文件关闭----");
})
