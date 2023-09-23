class Person{
    constructor(){
        console.log('안녕');
    }
    say()
    {
        console.log('say!')
    }
}
class Student extends Person{
    constructor(){
        super(Person);
    }
       say(){
            console.log("I'm student!");
        }
}
function solution(){
    let student_Array = [];
    for(i = 0; i < 10; i++)
    {
       const student = new Student();
       student_Array.push(student);
    
    }
    student_Array.forEach(student => {student.say()});
        
    
}
solution();