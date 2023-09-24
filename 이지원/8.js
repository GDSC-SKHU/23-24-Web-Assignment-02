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
    let a = ['Apple', 'Lime', 'Raisin', 'Mango', 'Banana', 'Peach', 'Blue Berry']; //a 배열에 과일 이름 저장

    a.push('Orange', 'Kiwi'); // Orange와 Kiwi를 배열 끝에 추가

    a[3] = 'Tomato'; // Mango 위치의 값을 Tomato로 변경

    console.log(a); // 배열 출력

    console.log('Array Length: ', a.length); // 배열의 길이 출력
}

solution();