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
    function add(x, y) {
        return x + y;
    }

    function sub(x, y) {
        return x - y;
    }

    function div(x, y) {
        return x / y;
    }

    function mul(x, y) {
        return x * y;
    }


    console.log('덧셈:', add(a, b));
    console.log('뺄셈:', sub(a, b));
    console.log('나눗셈:',div(a, b));
    console.log('곱셈:', mul(a, b));

}

solution(1, 2);
