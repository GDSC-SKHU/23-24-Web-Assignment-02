class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    say(){
        console.log("안녕하세요 제 이름은 " +this.name + " 입니다.");
        console.log("나이는 " + this.age +" 입니다.");
}
}

    class LeeManJae extends Person{
        constructor(){
            super("이만재",22)
            
        }
    }


function solution(){
    const leemanjae = new LeeManJae()
        {
            leemanjae.say()
        }
}
solution();