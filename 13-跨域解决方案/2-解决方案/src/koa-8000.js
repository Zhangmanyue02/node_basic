const Koa = require('koa')
const KoaRouter = require('@koa/router')
const static = require('koa-static')

const app = new Koa()

app.use(static('./public'))

const userRouter = new KoaRouter({ prefix: '/users' })
userRouter.get('/list', (ctx, next) => {
    ctx.body = [
        { id: 111, name: "why", age: 18 },
        { id: 112, name: "kobe", age: 18 },
        { id: 113, name: "james", age: 25 },
        { id: 114, name: "curry", age: 30 },
    ]
})
app.use(userRouter.routes())
app.use(userRouter.allowedMethods())

app.listen(8000, () => {
    console.log('koa 8000服务器启动成功~')
})
