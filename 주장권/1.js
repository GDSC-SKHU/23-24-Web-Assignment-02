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
    for (let i = 1; i <= n; i++) {
        let temp = "";
        for (let j = i; j <= n; j++)
            temp += " ";
        for (let j = 1; j <= i * 2 - 1; j++)
            temp += "*";
        console.log(temp);
    }
}

solution(3);
solution(5);