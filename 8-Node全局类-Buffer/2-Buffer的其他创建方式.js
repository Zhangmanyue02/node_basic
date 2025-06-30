/* Buffer的其他创建方式 */
// 1.创建Buffer(Buffer.alloc)

// 创建一个长度为 8 字节的 Buffer 实例，所有字节初始化为 0
const buf = Buffer.alloc(8)
// 打印创建好的 Buffer 实例
console.log(buf);


// 访问每个字节
// 打印 Buffer 实例的第一个字节
// console.log(buf[0]);
// 打印 Buffer 实例的第二个字节
// console.log(buf[1]);


// 手动操作每个字节
buf[0] = 100
buf[1] = 0x66
console.log(buf);
console.log(buf.toString())

buf[2] = 'm'.charCodeAt()
console.log(buf)

