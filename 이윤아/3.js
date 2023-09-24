/**
 * 
 * 학생이라는 객체를 만들고, 2번 과제에서 만든 사람 객체를 상속 받아라
 * 
 * 학생은 say 함수를 호출 했을때 "I'm Student!" 라고 출력되게 하라
 * 
 * 그리고 학생의 say 함수를 호출 하라
 */

// 2.js 사1람 객체 Import
const 사1람 = require('./2.js'); 

function solution() {
    // 사람 객체를 상속받는 학생 객체
    class 학1생 extends 사1람 {
        //  "I'm Student!" 라는 문구가 출력되도록 오버라이딩
        say() {
            console.log("I'm Student!");
        }
    }

    // 학생 클래스의 인스턴스 생성
    const 학생 = new 학1생();

    // 학생의 say 함수 호출
    학생.say();
}

solution();

// 4.js문제 해결을 위한 module exports
module.exports = 학1생;