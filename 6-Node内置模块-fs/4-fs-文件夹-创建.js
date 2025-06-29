const fs = require("fs")

fs.mkdir("./zmy", err => {
    if (err) return;
    console.log("文件夹创建成功");
})
