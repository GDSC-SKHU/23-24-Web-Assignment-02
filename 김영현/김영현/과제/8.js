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
    var a = ["Apple", "Lime", "Raisin", "Mango", "Banana", "Peach", "Blue Berry"];
    a.push("Orange", "Kiwi");
    var mangoIndex = a.indexOf("Mango");
    if(mangoIndex !== -1){
        a[mangoIndex] = "Tomato";
    }
    console.log(a);
    console.log("배열의 길이:", a.length);
}

solution();