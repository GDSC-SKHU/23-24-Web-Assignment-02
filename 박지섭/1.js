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
    for(let i = 1; i <= n; i++){
        let Blank = ' '.repeat(n - i);
        let Star = '*'.repeat(2 * i - 1);

        let Pyramid = Blank + Star ;
        console.log(Pyramid);
    }
}

solution(3);
solution(5);