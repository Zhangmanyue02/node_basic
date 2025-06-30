console.log(Buffer);
// 1.创建Buffer: new方式
const buf = new Buffer("hello buf")
console.log("buf:", buf);

// 2.创建Buffer: Buffer.from()
const buf2 = Buffer.from("hello buf2")
console.log("buf2:", buf2);

// 3.创建Buffer(字符串中包含中文)
const buf3 = Buffer.from("你好啊buf3")
console.log("buf3:", buf3);
console.log("buf3=>>>toString:", buf3.toString());

// 4.手动指定Buffer创建时的编码格式
const buf4 = Buffer.from("你好啊buf4", "utf8")
console.log("buf4:", buf4);
console.log("buf4=>>>toString:", buf4.toString());

/* buffer是什么 */
// buffer本质是二进制的运行时表示