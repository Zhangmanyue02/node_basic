// 以下代码通过循环实现阻塞线程的效果
function blockThread(ms) {
    const start = Date.now();
    while (Date.now() - start < ms) {
        // 空循环以阻塞线程
    }
}

// 调用函数阻塞线程 3000 毫秒（3 秒）
blockThread(3000);
