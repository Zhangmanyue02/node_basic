const EventEmitter = require("events")

const eventEmitter = new EventEmitter()

eventEmitter.on("zmy", (name, age) => {
    console.log(name, age);
})

setTimeout(() => {
    eventEmitter.emit("zmy", "zmy", 18)
}, 1000)
