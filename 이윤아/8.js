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
    // 변수 a에 과일들을 배열로 저장.
    let a = ['Apple', 'Lime', 'Raisin', 'Mango', 'Banana', 'Peach', 'Blue Berry'];

    // push 매소드를 사용해 배열 끝에 'Orange', 'Kiwi' 추가 
    a.push('Orange', 'Kiwi');

    // 'Mango' 위치의 값을 'Tomato'로 수정.
    a[3] = 'Tomato'
    

    // 배열 a와 길이를 출력.
    console.log('배열 a : ',a);
    console.log( '배열 a의 길이 : ',a.length);
}

solution();
