const express = require("express")

const app = express()
/* 
    在 Express 框架中，
    中间件是指在请求（Request）和响应（Response）周期中能够
    访问请求对象（req）、响应对象（res）和下一个中间件函数的函数。
*/
/* 
    中间件可以：
    1.执行任何代码
    2.修改请求和响应对象
    3.结束请求响应周期
    4.调用堆栈中的下一个中间件
*/
app.get("/login", (req, res, next) => {
    // 1.执行任何代码
    res.send("welcome to admin")
    // 2.修改请求和响应对象
    // req.age = 1999
    // 3.结束请求响应周期
    // res.json({ code: 200, data: {}, message: "success" })
    // 4.调用堆栈中的下一个中间件
    next()
})

app.use(() => {
    console.log("第二个中间件");
})

app.listen(9000, () => {
    console.log("api server 9000 start");
    console.log("http://localhost:9000");
})