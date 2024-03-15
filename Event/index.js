const Emitter = require("events");

const event = new Emitter();

event.on("onMounted", (name) => {
  console.log("事件触发了", name);
});

setTimeout(() => {
  event.emit("onMounted", "wyw");
}, 1000);
