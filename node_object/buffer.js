const buffer = Buffer.from('저를 버퍼로 바꿔보세요'); // 문자열을 버퍼 단위로 바꿈
console.log(buffer)
console.log(buffer.length);
console.log(buffer.toString());

const array = [Buffer.from('띄엄 '), Buffer.from('띄엄 '), Buffer.from('띄어쓰기')];
const buffer2 = Buffer.concat(array); // 버퍼들을 하나로 합침
console.log(buffer2.toString());

const buffer3 = Buffer.alloc(5) // 빈 버퍼 생성. 5바이트
console.log(buffer3);
