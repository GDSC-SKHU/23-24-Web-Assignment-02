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

    for (let i=1; i<=n; i++) {

        for (let x=1; x<=n-i; x++) {
          process.stdout.write(" ");
        }

        for (let y=1; y<=i*2-1; y++) {
          process.stdout.write("*");
        }

        console.log();
      }

}

solution(3);
solution(5);