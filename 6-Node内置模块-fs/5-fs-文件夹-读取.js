const fs = require("fs")

// 1.文件夹读取：最基本
/* fs.readdir("zmy", (err, files) => {
    if (err) {
        console.log("读取文件夹失败");
        return
    }
    console.log("读取成功=>>", files);
}) */

// 2.文件夹读取：循环
/* @readdir
    1.参数1：表示要读取的文件夹路径
    2.参数2：配置对象
        withFileTypes：true 表示以文件类型的方式读取文件
    3.参数3：回调函数
        err：错误对象
        files：文件数组
*/
/* fs.readdir("zmy", { withFileTypes: true }, (err, files) => {
    console.log(files.length);
    files.forEach(item => {
        if (item.isDirectory()) {
            console.log("item是一个文件夹：", item.name);
        } else {
            console.log("item是一个文件：", item.name);
        }
    })
})
 */


// 3.文件夹读取：递归
function readDirectory(path) {
    fs.readdir(path, { withFileTypes: true }, (err, files) => {
        files.forEach(item => {
            if (item.isDirectory()) {
                readDirectory(`${path}/${item.name}`)
            } else {
                console.log("获取到文件:", item.name);
            }
        })
    })
}

readDirectory("zmy")