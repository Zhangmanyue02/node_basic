// 1.global
// console.log(global);

// 2.特殊的全局对象
console.log(__dirname); //d:\source code\Front-end\zmy\3-Node\1-Node基础知识
console.log(__filename); //d:\source code\Front-end\zmy\3-Node\1-Node基础知识\3-Node中的全局对象.js

// 3.模块化时学习
// console.log(module);
// console.log(exports); //{}
// console.log(require);

// 4.常见全局对象
// console.log(process);
// console.log("process.argv:", process.argv);

// 5.定时器方法
setTimeout(() => { // 只执行一次
    console.log("setTimeout");
})

/* setInterval(() => { // 重复执行
    console.log("setInterval");
}, 1000) // 1000毫秒执行一次
 */

setImmediate(() => { // 立即执行
    console.log("setImmediate");
})

// 6.额外执行函数
process.nextTick(() => {
    console.log("nextTick");
})