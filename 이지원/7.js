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

function solution(a, b) {   //두 개의 매개변수 a와 b를 받는다.
    function add(a, b) {    //함수 호출 : 각각의 함수는 2개의 인자 a와 b를 받아서 연산을 수행(결과 반환)
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

    const addResult = add(a, b);    // 각각의 연산을 수행하고 내부함수를 호출하여 결과를 저장
    const subResult = sub(a, b);
    const divResult = div(a, b);
    const mulResult = mul(a, b);

    console.log(`addResult: ${addResult}`); // 결과 출력.
    console.log(`subResult: ${subResult}`);
    console.log(`divResult: ${divResult}`);
    console.log(`mulResult: ${mulResult}`);
}

solution(1, 2);