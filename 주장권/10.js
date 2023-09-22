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

class JJG extends Person {
    constructor(name, age) {
        super(name, age);
    }
}

function solution() {
    const JG = new JJG("JJG", 25);
    JG.say();
}

solution();