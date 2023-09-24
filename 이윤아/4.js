/**
 * 
 * 3번에서 만든 학생 객체를 10개 생성하고, 배열에 집어 넣어라
 * 
 * 반복문을 통해, 배열에 모든 학생 객체의 say 함수를 호출하라
 */
// 3.js 학1생 객체 Import
const 학1생 = require('./2.js'); 

function solution() {
  // 학생 객체 10개 생성
  const 학생1 = new 학1생();
  const 학생2 = new 학1생();
  const 학생3 = new 학1생();
  const 학생4 = new 학1생();
  const 학생5 = new 학1생();
  const 학생6 = new 학1생();
  const 학생7 = new 학1생();
  const 학생8 = new 학1생();
  const 학생9 = new 학1생();
  const 학생10 = new 학1생();

  // 학생 객체들을 배열에 집어 넣기
  let 학생배열 = [학생1, 학생2, 학생3, 학생4, 학생5, 학생6, 학생7, 학생8, 학생9, 학생10];

  // 반복문(for문)을 통해 배열에 모든 학생 객체의 say 함수를 호출
  for (let 학생 of 학생배열) {
      학생.say();
  }
}

solution();