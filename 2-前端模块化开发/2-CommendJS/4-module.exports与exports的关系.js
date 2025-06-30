/* module.exports 与 exports 的关系探究 */
console.log(module.exports === exports);



// 测试一：
exports.name = "hello"
console.log(module.exports === exports);

// 测试二：
module.exports = {
    name: "zmy"
}
console.log(module.exports === exports);

/* 一开始module.exports与exports在内存里指向同一个引用，
    当我们给module.exports重新赋值后，module.exports与exports就不在指向同一个引用了，
 */

