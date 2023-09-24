/**
 * 사람이라는 객체가 있다. 사람이라는 객체가 생성시에, "안녕" 을 출력하라
 * 
 * 그리고 사람 이라는 객체의 say 함수를 호출하라
 * 
 */

//생성시 안녕을 출력하는 객체
class 사1람 {
    say() {
        console.log("안녕");
    }
}
// 사람 클래스의 인스턴스 생성
const 사람 =  new 사1람

//사람  객체의 say 함수 호출
사람.say();

// 3.js문제 해결을 위한 module exports
module.exports = 사1람;