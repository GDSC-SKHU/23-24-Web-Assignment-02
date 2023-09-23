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
function solution() {
        const student = new Student()
        {
            student.say()
        }
}
solution();

