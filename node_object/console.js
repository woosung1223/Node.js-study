// console
console.time('time check'); // time ~ timeEnd 사이 시간 체크. 파라미터는 같아야 함!
console.timeEnd('time check');
console.error();
console.dir(global);

function bar() {
    foo();
}
function foo() {
    console.trace(); // 해당 시점의 호출 스택을 출력
}
function test() {
    bar();
}
test();
