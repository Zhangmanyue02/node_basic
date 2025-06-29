const fs = require("fs")

// 定义文件路径
const filePath = "./bbb.txt";
// 定义要写入的内容
const content = "我是写入的bbb.txt";
// 定义选项对象，指定编码和文件打开标志
const options = {
    encoding: "utf-8",
    flag: "w+"
};
// 定义回调函数，处理写入结果
const callback = (err) => {
    if (err) {
        console.log("文件写入失败");
        return
    };
    console.log("文件写入成功");
};

// 调用 fs.writeFile 方法进行文件写入
fs.writeFile(filePath, content, options, callback);

/* 'a' : 以追加模式打开文件。如果文件不存在，则创建文件。 */
/* 'a+' : 以读取和追加模式打开文件。如果文件不存在，则创建文件。 */
/* 'w' : 以写入方式打开文件。如果文件不存在，则创建文件；如果文件存在，则截断文件。 */
/* 'w+' : 打开文件进行读写。如果文件不存在，则创建文件；如果文件存在，则截断文件。 */
/* 'r' : 以读取模式打开文件。如果文件不存在，则报错。 */
/* 'r+' : 以读取模式打开文件。如果文件不存在，则报错。 */