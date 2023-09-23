/**
 * 
 * 학생이라는 객체를 만들고, 2번 과제에서 만든 사람 객체를 상속 받아라
 * 
 * 학생은 say 함수를 호출 했을때 "I'm Student!" 라고 출력되게 하라
 * 
 * 그리고 학생의 say 함수를 호출 하라
 */

class Person { //부모 Person 클래스 정의
    constructor() {console.log('안녕');}
    say() {
        console.log('say!');
    }
}

class Student extends Person { //Person 객체를 상속받은 자식 클래스 정의
    constructor(){ 
        super(); //부모 클래스의 요소를 상속받아 사용
    }
    say() { //메소드 오버라이딩
        console.log("I'm Student!");
    }
}

function solution() {
    const student = new Student;
    student.say();
}

solution();