/**
 * 
 * 학생이라는 객체를 만들고, 2번 과제에서 만든 사람 객체를 상속 받아라
 * 
 * 학생은 say 함수를 호출 했을때 "I'm Student!" 라고 출력되게 하라
 * 
 * 그리고 학생의 say 함수를 호출 하라
 */

class Person {

    hello() {
        console.log('안녕');
    }

    say() {
        console.log('say!');
    }
}

class Student extends Person{ // Person이라는 부모 클래스를 Student 클래스에 상속.
    say(){
        console.log("I'm Student!") //메서드 오버라이딩: 부모 클래스의 메서드를 자식 클래스에서 재정의하여 사용하는 것
    }
}

function solution() {
    const student = new Student();
    student.say();
}
solution();