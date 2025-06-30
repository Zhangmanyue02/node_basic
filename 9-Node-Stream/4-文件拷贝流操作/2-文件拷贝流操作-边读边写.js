const fs = require("fs")

const readStream = fs.createReadStream("./2/user.txt")
const writeStream = fs.createWriteStream("./2/user_copy.txt")

readStream.on("data", (chunk) => {
    console.log("读取到的数据", chunk);
    writeStream.write(chunk)
})

readStream.on("finish", () => {
    console.log("读取完毕");
    writeStream.close()
})