/**
 * Person 을 상속받는 본인 이름의 class 를 만들어라
 * 
 * 본인 이름의 class 가 생성될때 부모에게 본인 이름과, 나이를 super 로 전달하라
 * 
 * 본인 이름의 class 에는 
 * 
 * solution 함수에서 본인 이름의 class(객체) 를 생성하고 say 함수를 호출하라
 */

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    say() {
        console.log('안녕하세요 제 이름은 ' + this.name + ' 입니다.');
        console.log('나이는 ' + this.age + ' 입니다.');
    }
}

class JiWon extends Person { // 부모에게 상속받음.
    constructor() {
        super('이지원', 24); // super : 이름과 나이를 전달
    }
}

function solution() {
    const nameAge = new JiWon(); // JiWon 클래스(객체) 생성
    nameAge.say(); // say 함수 호출
    
}

solution();