const fs = require("fs")

fs.readFile("./1/user.txt", (err, data) => {
    if (err) {
        console.log("读取失败");
    }
    console.log(data);
    fs.writeFile("./1/user_copy.txt", data, (err) => {
        if (err) {
            console.log("写入失败");
        }
        console.log("写入完成");
    })
})