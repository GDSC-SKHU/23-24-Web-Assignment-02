/**
 * n 의 개수만큼 피라미드 층을 만들기
 * 
 * Case. 1
 * 입력 3
 * 
 * 출력 
 *   *
 *  ***
 * *****
 * 
 * 
 * 
 * Case. 2
 * 입력 5
 * 
 * 출력 
 *     *
 *    ***
 *   *****
 *  *******
 * *********
 */

function solution(n) {
  let output = '';

  for (let i = 0; i < n; i++) {
    for (let a = 0; a < (n - i); a++) {
      output += ' ';
    }
    for (let b = 0; b < (2 * i + 1); b++) {
      output += '*';
    }
    output += '\n';
  }

  console.log(output);
}

solution(3);
solution(5);