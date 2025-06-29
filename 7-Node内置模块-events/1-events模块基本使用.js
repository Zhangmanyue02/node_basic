// 引入事件发射器
const EventEmitter = require("events")

console.log(typeof EventEmitter); //function
console.log(EventEmitter);

// 1.创建EventEmitter实例
const eventEmitter = new EventEmitter()

// 2.监听事件
eventEmitter.on("zmy", () => {
    console.log("zmy事件发生，回调执行");
})

setTimeout(() => {
    eventEmitter.emit("zmy")
}, 1000)