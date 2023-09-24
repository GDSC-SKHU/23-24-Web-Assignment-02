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



//solution 함수에서 인자(매개변수) 2개를 받아 각각 4개 함수를 호출하여 결과를 return 하는 함수 정의.
function solution(a, b) {

    //함수 solution 내부에 add, sub, div, mul 함수정의.
    function add(a, b) {
        return a + b;
    }

    function sub(a, b) {
        return a - b;
    }

    function div(a, b) {
        return a / b;
    }

    function mul(a, b) {
        return a * b;
    }

    // return 된 값을 console.log로 출력하게 함.
    console.log("add : ", add(a, b));
    console.log("sub : ", sub(a, b));
    console.log("div : ", div(a, b));
    console.log("mul : ", mul(a, b));
}

// 매개변수 2개를 받는 solution 함수를 호출.
solution(1, 2);
