const {
    Worker, isMainThread, parentPort
} = require("worker_threads")

if(isMainThread){

    const worker = new Worker(__filename) // 워커스레드에서 현재파일 실행
    worker.on("message", message=>console.log("from worker", message)) // 워커로부터 "message"이벤트  받음
    worker.on("exit", ()=>console.log("worker exit"))
    worker.postMessage("ping")  // worker로 "message"이벤트 전달
}else{
    parentPort.on("message", (value)=>{ // 부모로부터 "message"이벤트 받음
        console.log("from parent", value)
        parentPort.postMessage("pong") // 부모로 "message"이벤트 전달
        parentPort.close()
    })
}