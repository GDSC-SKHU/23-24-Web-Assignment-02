/**
 * 
 * 3번에서 만든 학생 객체를 10개 생성하고, 배열에 집어 넣어라
 * 
 * 반복문을 통해, 배열에 모든 학생 객체의 say 함수를 호출하라
 */

class Person { //부모 Person 클래스 정의
    constructor() {
        console.log('안녕');
    }
    say() {
        console.log('say!');
    }
}

class Student extends Person { //Person 객체를 상속받은 자식 클래스 정의
    constructor(){ 
        super(); //부모 클래스의 요소를 상속받아 사용
    }
    say() {
        console.log("I'm Student!");
    }
}

function solution() {
    const studentArray = []; //학생 객체를 담을 배열 생성

    for (let i = 0; i < 10; i++) {
        const student = new Student(); //학생 객체 생성
        studentArray.push(student); //배열에 삽입
    }

    for (const student of studentArray) {
        student.say(); //배열에 있는 모든 학생 객체의 'say'함수 호출
    }
}

solution();
