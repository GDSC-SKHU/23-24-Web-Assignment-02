/**
 * 
 * 3번에서 만든 학생 객체를 10개 생성하고, 배열에 집어 넣어라
 * 
 * 반복문을 통해, 배열에 모든 학생 객체의 say 함수를 호출하라
 */
class Person {
    say() {
        console.log('안녕');
    }
}

class Student extends Person {
    say() {
        console.log("I'm Student!");
    }
}

function solution() {
    const students = []; 
    const student = new Student();

    for (let i = 0; i < 10; i++) {
        students.push(student);
    }

    for (let i = 0; i < students.length; i++) {
        students[i].say();
    }
}

solution();