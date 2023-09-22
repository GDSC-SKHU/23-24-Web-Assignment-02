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
    for(let i=0; i<n; i++){
        for(let j=n-1; j>i; j--){
            
        }
        for(let k=0; k<i; k++){
            console.log("*")
        }
    }    
}

solution(3);