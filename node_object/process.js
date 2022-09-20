console.log(process.version);
console.log(process.arch);
console.log(process.platform);
console.log(process.pid);
console.log(process.uptime());
console.log(process.execPath);
console.log(process.cwd());
console.log(process.cpuUsage);

console.log(process.env); // 환경변수

setTimeout(() => console.log('setTimeout callback'), 0);
setImmediate(() => console.log('setImmdiate callback'));
// setTimeout, setImmediate는 같은 시점에 사용되면 순서를 보장할 수 없음! 뒤죽박죽
process.nextTick(() => console.log('nextTick callback'));
// 반면 nextTick은 항상 우선순위가 보장된다. 가장 먼저 출력됨