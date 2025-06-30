const fs = require("fs")

/* Buffer与字符串的转换 */
// 1.Buffer 转字符串
const buf = Buffer.from("hello")
console.log(buf.toString());
// 2.字符串转Buffer
const buf2 = Buffer.from("你好")
console.log(buf2)
// 3.Buffer 转 16进制字符串
console.log(buf2.toString("hex"));
// 4.16进制字符串 转 Buffer
console.log(Buffer.from("e4bda0e5a5bd", "hex"));
// 5.Buffer 转 base64 字符串
console.log(buf2.toString("base64"));
// 6.base64 字符串 转 Buffer
console.log(Buffer.from("5L2g5aW9", "base64"));
