/**
 * 사람이라는 객체가 있다. 사람이라는 객체가 생성시에, "안녕" 을 출력하라
 * 
 * 그리고 사람 이라는 객체의 say 함수를 호출하라
 * 
 */

class Person { //사람 클래스 생성
    constructor() {console.log('안녕');} //생성자
    say() {
        console.log('say!');
    }
}


function solution() {
    const person = new Person(); //사람 객체 생성
    person.say(); //사람 객체의 say 함수 호출
}

solution();