const EventEmitter = require('events');

const myEvent = new EventEmitter();
myEvent.addListener('event1', () => {
    console.log('이벤트 1');
}); // 이벤트리스너 추가
myEvent.on('event2', () => {
    console.log('이벤트 2');
}); // on 역시 addListner와 동일함!
myEvent.once('event3', () => {
    console.log('이벤트 3');
}); // 한번만 실행된다

myEvent.emit('event1');
myEvent.emit('event1'); // 여러번 호출도 가능
myEvent.emit('event2'); 

myEvent.emit('event3'); // 한번만 호출 가능
myEvent.emit('event3'); // 호출되지 않음 once로 정의했기에

myEvent.removeAllListeners('event1'); // eventListner 삭제 가능