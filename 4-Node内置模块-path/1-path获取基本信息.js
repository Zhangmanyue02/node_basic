const path = require("path")

// 1.path 解析全局对象 __filename
// console.log(__filename); // D:\source code\Front-end\zmy\3-Node\4-Path模块的使用\1-path获取基本信息.js
console.log("1=>>", path.extname(__filename));//获取文件扩展名
console.log("2=>>", path.dirname(__filename));//获取文件所在目录
console.log("3=>>", path.basename(__filename));//获取文件的名称

// 2.join方法
console.log("4=>>", path.join(__dirname, "preload.js"));