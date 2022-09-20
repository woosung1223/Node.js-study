// console
console.time('time check'); // time ~ timeEnd 사이 시간 체크. 파라미터는 같아야 함!
console.timeEnd('time check');
console.error('error message'); 
console.dir({a : '123', b : '456'}); // object logging

function bar() {
    foo();
}
function foo() {
    console.trace(); // 해당 시점의 호출 스택을 출력 (anonymous 포함)
}
function test() {
    bar();
}
test();
