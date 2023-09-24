/**
 * 
 * a 라는 변수에는 Apple, Lime, Raisin, Mango, Banana, Peach, Blue Berry 과일들의 문자열이 배열로서 저장된다.
 * 
 * a 라는 변수에서 2번째 인덱스 부터 2개 요소를 제거 하고 해당 2개의 요소를 출력하라
 * 
 */

function solution() {
    let a = ['Apple', 'Lime', 'Raisin', 'Mango', 'Banana', 'Peach', 'Blue Berry'];  //a 배열에 과일 이름 저장

    // 2번째 인덱스부터 2개 요소 제거하고 해당 요소를 출력
    let removeFruit = a.splice(2, 2);  //제거된 요소들이 removedItems에 저장
    
    console.log('removeFruit: ', removeFruit);  //제거된 요소 출력
}

solution();