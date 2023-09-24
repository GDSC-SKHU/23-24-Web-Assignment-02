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

  for(let i = 0; i < 3; i++){
    let stars = "";
   
    for(let k = 3; k > i; k--){ 
      stars = stars + " ";
    }
    // 별 증가 for 문
    for(let j = 0; j < (2 * i + 1); j++){ 
      stars = stars + "*";
    }
    console.log(stars);
  }
}

function solution(n) {

  for(let i = 0; i < n; i++){ // 3줄 생성
    let stars = "";

    for(let k = n; k > i; k--){ // n-1개만큼 공백 생성 *처음 실행될 때는 현재 값을 반환해서 3칸 공백 생성.
      stars = stars + " ";
    }
    
    for(let j = 0; j < (2 * i + 1); j++){ //홀수만큼 * 생성
      stars = stars + "*";
    }
    console.log(stars);
  }
}

solution(3);
solution(5);