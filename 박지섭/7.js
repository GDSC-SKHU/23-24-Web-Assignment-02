/**
 * 
 * 각각 사칙연산을 하는 add, sub, div, mul 함수가 존재 한다.
 * 
 * 해당 함수들은 solution 함수의 내부 함수이다.
 * 
 * solution 함수에서 인자(매개변수) 2개를 받아 각각 4개 함수를 호출하여 결과를 return 하는 함수를 만들어라
 * 
 * solution 함수에서는 4개의 함수를 호출하고, return 된 값을 console.log로 출력하라
 * 
 */

function solution(a, b) {
    function add(a, b){
        return a + b;
    }
    function sub(a, b){
        return a - b;
    }
    function div(a, b){
        return a / b;
    }
    function mul(a,b){
        return a * b;
    }
    // let Array = [];
    let SOLUTION_ADD = add(a, b);
    let SOLUTION_SUB = sub(a, b);
    let SOLUTION_DIV = div(a, b);
    let SOLUTION_MUL = mul(a, b);

    // Array[0] = SOLUTION_ADD;
    // Array[1] = SOLUTION_SUB;
    // Array[2] = SOLUTION_DIV;
    // Array[3] = SOLUTION_MUL;
    let Array = [SOLUTION_ADD, SOLUTION_SUB, SOLUTION_DIV, SOLUTION_MUL]
    return console.log(Array);
}


solution(1, 2);