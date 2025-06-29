const EventEmitter = require("events")

const eventEmitter = new EventEmitter()

// 1.once: 用于为指定事件注册一个单次监听器，该监听器在事件首次触发时执行，执行后会自动移除，后续再次触发该事件时，该监听器不会再执行。
// eventEmitter.once("zmy", () => {
//     console.log("zmy事件回调执行");
// })

// eventEmitter.emit("zmy")
// eventEmitter.emit("zmy")

// 2.prependListener: 用于在指定事件的监听器数组的开头添加一个监听器，新添加的监听器会在其他监听器之前触发。
console.log(eventEmitter.listeners("zmy"));
eventEmitter.prependListener("zmy", () => {
    console.log("zmy事件回调执行3");
})
eventEmitter.prependListener("zmy", () => {
    console.log("zmy事件回调执行4");
})
eventEmitter.prependListener("zmy", () => {
    console.log("zmy事件回调执行2");
})
eventEmitter.on("zmy", () => {
    console.log("zmy事件回调执行1");
})
eventEmitter.on("zmy", () => {
    console.log("zmy事件回调执行0");
})

console.log(eventEmitter.listeners("zmy"));
eventEmitter.emit("zmy")