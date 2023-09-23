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
    function add(a, b) {
        return a + b;
      }
      
      function sub(a, b) {
        return a - b;
      }

      function div(a, b) {
        if (b !== 0) {
          return a / b;
        } 
        else {
          return "0으로 나눌 수 없습니다.";
        }
      }

      function mul(a, b) {
        return a * b;
      }
      
    const resultAdd = add(a, b);
    const resultSub = sub(a, b);
    const resultDiv = div(a, b);
    const resultMul = mul(a, b);

    console.log(resultAdd.toString());
    console.log(resultSub.toString());
    console.log(resultDiv.toString());
    console.log(resultMul.toString());
}

solution(1, 2);