const EventEmitter = require("events")

const eventEmitter = new EventEmitter()

function onZmyCallBack() {
    console.log("zmy事件被触发");
}

eventEmitter.on("zmy", onZmyCallBack)

setTimeout(() => {
    // 先取消
    eventEmitter.off("zmy", onZmyCallBack)
    // 再触发
    eventEmitter.emit("zmy")
}, 1000)