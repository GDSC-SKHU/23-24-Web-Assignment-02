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

// 각 층에 필요한 별의 개수 계산식
function countStars(floor) {
  return 2 * floor - 1; 
}

function printStars(spaces, stars) {
  let row = ' '.repeat(spaces) + '*'.repeat(stars); // 공백과 별을 조합하여 한 행 생성
  console.log(row); // 해당 행 출력
}

function solution(n) {
  for (let i = 1; i <= n; i++) { // 1부터 n까지 순회하면서 각 층 생성
    let spaces = n - i; // 현재 층의 공백 개수 계산
    let stars = countStars(i); // 현재 층의 별 개수 계산
    printStars(spaces, stars); // 층 생성 및 출력
  }
}

// 실행
solution(3); 
solution(5); 
