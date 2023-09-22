/**
 * 
 * 3번에서 만든 학생 객체를 10개 생성하고, 배열에 집어 넣어라
 * 
 * 반복문을 통해, 배열에 모든 학생 객체의 say 함수를 호출하라
 */

const Student = require('./3.js');
function solution() {
    const arr = [];  

 
for (let i = 0; i < 10; i++) {
    const haksang = new Student();
    arr.push(haksang);
}

 
for (const haksang of arr) {
    haksang.say();
}
}
solution();