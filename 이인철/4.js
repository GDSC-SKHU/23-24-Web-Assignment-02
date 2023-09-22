/**
 * 
 * 3번에서 만든 학생 객체를 10개 생성하고, 배열에 집어 넣어라
 * 
 * 반복문을 통해, 배열에 모든 학생 객체의 say 함수를 호출하라
 */

const Arrayob=[];
class Person {
    constructor(){
        this.message="say";
    }
    say() {
        console.log(this.message);
    }
}

class Student extends Person{
    constructor(){
        super();
        this.stumessage="I'm student!";
    }
    say(){
        console.log(this.stumessage);
    }
}

function solution() { /* 배열안에있는 객체의 함수 불러내는 형식 기억하기! */
    for(var i=0; i<10; i++){
        const student = new Student();
        Arrayob.push(student);
    }
    for(const obj of Arrayob){ 
        obj.say();
    }


}

solution();