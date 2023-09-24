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
    for (let i = 0; i < n; i++) {
        let blank = '';
        let star = '';
        for (let j = 0; j < n - i - 1; j++) {
            blank += ' ';
        }

        for (let k = 0; k < 2 * i + 1; k++) {
            star += '*';
        }

        console.log(blank + star);
    }
}

solution(5);
