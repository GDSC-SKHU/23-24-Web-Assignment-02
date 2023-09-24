/**
 * 사람이라는 객체가 있다. 사람이라는 객체가 생성시에, "안녕" 을 출력하라
 * 
 * 그리고 사람 이라는 객체의 say 함수를 호출하라
 * 
 */

class Person {

    hello() {   //메서드 생성
        console.log('안녕'); 
    }

    say() {
        console.log('say!');
    }
}


function solution() {
    const person = new Person(); // Person 클래스의 인스턴스를 생성
    person.hello();
    person.say();
}


solution();