// 간단한 worker threads 예제
const { Worker, isMainThread, parentPort } = require('worker_threads');

if(isMainThread) { // 메인스레드
    const worker = new Worker(__filename); // 워커스레드 생성
    worker.on('message', message => console.log('from worker', message));
    // 워커스레드에게 메세지가 도착하면
    worker.on('exit', () => console.log('worker exit')); // 워커스레드가 종료될 때
    worker.postMessage('ping'); // 워커스레드에게 메세지를 보냄
}
else { // 워커스레드
    parentPort.on('message', (value) => { // 메세지가 메인스레드로부터 오면
        console.log('from parent', value);
        parentPort.postMessage('pong');
        parentPort.close();
    });
}