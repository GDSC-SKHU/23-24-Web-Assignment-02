/**
 * 
 * 3번에서 만든 학생 객체를 10개 생성하고, 배열에 집어 넣어라
 * 
 * 반복문을 통해, 배열에 모든 학생 객체의 say 함수를 호출하라
 */

class Student{
    say(){
        console.log("I'm Student!")
    }
}


function solution() {
    const studentArray = []; //학생 객체를 담을 배열 생성

for(let i = 0; i < 10; i++){
    const student =  new Student();  //학생 클래스의 인스턴스를 생성
    studentArray.push(student); //배열에 학생 객체 추가
}

for(const student of studentArray){
    student.say(); //배열에 있는 학생 객체의 say 함수 호출
}
}

solution();