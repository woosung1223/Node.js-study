// timer

let x = setTimeout(() => console.log('setTimeout callback'), 2000);
// 2s 이후 callback 실행
let y = setInterval(() => console.log('setInterval callback'), 1000);
// 1s 마다 callback 실행
let z = setImmediate(() => console.log('setImmediate callback'), 0);
// 즉시 callback 실행

clearTimeout(x);
clearInterval(y);
clearImmediate(z); 
// 호출스택이 비기 전 clear 함수들이 실행되므로 이벤트 루프는 x,y,z를 실행하지 않음
