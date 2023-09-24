/**
 * 사람이라는 객체가 있다. 사람이라는 객체가 생성시에, "안녕" 을 출력하라
 * 
 * 그리고 사람 이라는 객체의 say 함수를 호출하라    //생성자와, say 함수가 따로 존재하는 문제입니다.
 * 
 */
class Person {
    constructor() {
        console.log('안녕');
    }
    
    say() {}
}

function solution() {
    const person = new Person();
    person.say();
}

solution();