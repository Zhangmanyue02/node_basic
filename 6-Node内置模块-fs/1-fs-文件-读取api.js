const fs = require("fs")

// 1.同步读取:代码会阻塞，不会继续执行
const data = fs.readFileSync("./aaa.txt", {
    encoding: "utf-8"
})
console.log("1=>>", data);//我是aaa.txt文件

// 2.异步读取，代码不会阻塞，需要传入回调，当有结果，回调被执行
fs.readFile("./aaa.txt", {
    encoding: "utf-8"
}, (err, data) => {
    // 读取失败返回
    if (err) return;
    console.log("2=>>>", data);
})



// 3.异步读取之promise
fs.promises.readFile("./aaa.txt", {
    encoding: "utf-8"
}).then((data) => {
    console.log("3=>>>>", data);
}).catch((err) => {
    console.log("3=>>>>文件读取失败");
})

console.log(20);