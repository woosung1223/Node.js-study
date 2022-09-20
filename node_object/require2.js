console.log(require);

let {variable} = require('./require1'); // module.exports에서 객체를 가져옴과 동시에 실행
require('./require1'); // 단순히 실행만 함

console.log(variable);
console.log(require);
// cache에 처음 console.log과는 다르게 require1이 추가된 모습
// 다음 참조부터는 캐시를 참조함

console.log(require.main);
// 노드 실행 시 첫 모듈을 가리킴
