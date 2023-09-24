/**
 * 
 * a 라는 변수에는 Apple, Lime, Raisin, Mango, Banana, Peach, Blue Berry 과일들의 문자열이 배열로서 저장된다.
 * 
 * a 라는 변수에 Orange 와 Kiwi 를 배열 끝에 추가하고
 * 
 * Mango 위치의 값을 Tomato 로 바꾸어라
 * 
 * 해당 a 변수를 출력하고, a 변수의 길이도 같이 출력하라
 * 
 */

function solution() {
    let a = ['Apple', 'Lime', 'Raisin', 'Mango', 'Banana', 'Peach', 'Blue Berry'];
    a.push('Orange','Kiwi'); //배열의 맨 끝에 요소 추가

    const mangeIndex = a.indexOf("Mango"); //IndexOf : 배열의 특정 요소를 찾을 수 있는 첫 번재 인덱스를 반환, 요소가 없을 시 -1 반환하는 메서드
    if (mangeIndex !== -1) {a[mangeIndex] = "Tomato";} //요소가 있을 경우 요소 바꾸기 실행
    console.log(a, a.length);
}

solution();