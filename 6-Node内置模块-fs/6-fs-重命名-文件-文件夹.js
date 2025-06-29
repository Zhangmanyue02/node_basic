const fs = require("fs")

// 重命名文件
/* fs.rename("./aaaa.txt", "./aaa.txt", (err) => {
    if (err) {
        console.log("重命名失败", err);
        return
    }
    console.log("重命名成功");
}) */

// 重命名文件夹
fs.rename("./zmy", "./zmy1", (err) => {
    if (err) {
        console.log("重命名失败", err);
        return
    }
    console.log("重命名成功");
})