const fs = require("fs")

// fs.open：打开文件，返回文件描述符
fs.open("./aaa.txt", "r", (err, fd) => {
    if (err) {
        console.log("文件打开失败");
        return;
    }
    // 1.文件描述符：为了简化用户的工作，Node.js 抽象出操作系统之间的特定差异，
    // 并为所有打开的文件分配一个数字型的文件描述符。
    console.log(fd);

    // 2.fstat：根据文件描述符，获取文件信息
    fs.fstat(fd, (err, stats) => {
        if (err) {
            console.log("文件信息获取失败");
            return;
        }
        console.log(stats);
    })
})