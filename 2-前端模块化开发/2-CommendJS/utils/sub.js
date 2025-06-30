console.log("sub模块被引用执行~");
function sub(a, b) {
    return a - b;
}

module.exports = {
    sub
}