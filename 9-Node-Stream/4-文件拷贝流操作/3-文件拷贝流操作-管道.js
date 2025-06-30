const fs = require("fs")

// 创建读取文件的流，指定源文件为 user.txt
const sourceFileReadStream = fs.createReadStream("./3/user.txt")
// 创建写入文件的流，指定目标文件为 user_copy.txt
const destinationFileWriteStream = fs.createWriteStream("./3/user_copy.txt")
// 将读取流的数据通过管道传输到写入流，实现文件拷贝
sourceFileReadStream.pipe(destinationFileWriteStream)
