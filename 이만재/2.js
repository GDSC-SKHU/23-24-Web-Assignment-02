class Person{
    constructor(){
        console.log('안녕');  
    }
    say(){
        console.log('say!');
    }
}



function solution(){
    const person = new Person();
        person.say();
}
solution();