const EventEmitter = require("events")

const eventEmitter = new EventEmitter()

eventEmitter.on("zmy", () => {
    console.log("zmy事件回调执行");
})
eventEmitter.on("zmy", () => {
    console.log("zmy事件回调执行");
})

// 1. eventNames() 方法用于返回当前 EventEmitter 实例已注册事件的名称数组。
console.log(eventEmitter.eventNames());

// 2. getMaxListeners() 方法用于返回当前 EventEmitter 实例的最大监听器数量。
// 该数量限制了每个事件可以注册的监听器数量，默认值通常为 10。
console.log(eventEmitter.getMaxListeners());

// 3. listenerCount() 方法用于返回指定事件的监听器数量，需要传入事件名称作为参数。
console.log(eventEmitter.listenerCount("zmy"));

// 4.listeners() 方法用于返回指定事件的监听器数组，需要传入事件名称作为参数。
console.log(eventEmitter.listeners("zmy"));