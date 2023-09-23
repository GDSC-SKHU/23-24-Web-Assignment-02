/**
 * 
 * a 라는 변수에는 Apple, Lime, Raisin, Mango, Banana, Peach, Blue Berry 과일들의 문자열이 배열로서 저장된다.
 * 
 * a 라는 변수에서 2번째 인덱스 부터 2개 요소를 제거 하고 해당 2개의 요소를 출력하라
 * 
 */

function solution() {
    const a = ["Apple", "Lime", "Raisin", "Mango", "Banana", "Peach", "Blue Berry"];
    const remove = a.splice(2, 2);
    
    console.log("제거:", remove);
}

solution();
