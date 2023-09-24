/**
 * 사람이라는 객체가 있다. 사람이라는 객체가 생성시에, "안녕" 을 출력하라
 * 
 * 그리고 사람 이라는 객체의 say 함수를 호출하라
 * 
 */

class Person {
    constructor(){
        this.message="say";
    }
    say() {
        console.log(this.message);
    }
}


function solution() {
    const person =new Person();
    console.log("안녕");
    person.say();
}

solution();