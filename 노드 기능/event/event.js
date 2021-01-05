const EventEmiiter = require("events")

const myEvent = new EventEmiiter()
myEvent.addListener("event1",()=>{
    console.log("이벤트1")
})

myEvent.on("event2", ()=>{
    console.log("이벤트2")
})

myEvent.on("event2", ()=>{
    console.log("이벤트2 추가")
})

myEvent.emit("event1")
myEvent.emit("event2") // "이벤트2", "이벤트2 추가" 모두 실행

myEvent.removeAllListeners("event2") // "event2"와 연결된 모든 리스너 즉, "이벤트2", "이벤트2 추가" 모두 삭제
myEvent.emit("event2") 

myEvent.once("event3", ()=>{
    console.log("이벤트3")
})

myEvent.emit("event3")
myEvent.emit("event3")

const listener1 = () =>{
    console.log("이벤트5_1")
}

const listener2 = () =>{
    console.log("이벤트5_2")
}
myEvent.on("event5", listener1)
myEvent.on("event5", listener2)
myEvent.emit("event5")

myEvent.removeListener("event5", listener1)
myEvent.emit("event5")

console.log(myEvent.listenerCount("event2"))
