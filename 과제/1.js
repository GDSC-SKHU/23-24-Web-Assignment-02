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
    const level = n;

    for(let i = 1; i <= level; i++) {
        let stars="";
        for(let k = 1; k <= level-i; k++) {
            stars = stars + " ";
        }
        for(let j = 1; j <= i*2-1; j++) {
            stars = stars + "*";
        }
        console.log(stars);
    }
    }

solution(3);
solution(5);
