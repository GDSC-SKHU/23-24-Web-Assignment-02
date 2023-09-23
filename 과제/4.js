/**
 * 
 * 3번에서 만든 학생 객체를 10개 생성하고, 배열에 집어 넣어라
 * 
 * 반복문을 통해, 배열에 모든 학생 객체의 say 함수를 호출하라
 */
class Person {
  constructor(){
      console.log("안녕");
  }
  say() {
      console.log('say!');
  }
}

class Student extends Person{
  constructor(){
  super(Person);
  }

  say(){
    console.log("I'm Student!");
  }

}
//

function solution() {
  const arrayStudent = [];

  for(let i = 0; i<10; i++){
    const student = new Student;
    arrayStudent.push(student);
  }
  arrayStudent.forEach(function(student) {
    student.say();
  });
}

solution();