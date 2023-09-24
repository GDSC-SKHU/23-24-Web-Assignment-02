/**
 * 
 * solution 함수에 n 이라는 숫자가 주어진다.
 * 
 * n 은 받은 점수이다.
 * 
 * 100점은 A+를 출력하라
 * 
 * 90점 이상은 A를 출력하라
 * 
 * 80점 이상은 B를 출력하라
 * 
 * 70점 이상은 C를 출력하라
 * 
 * 60점 이상은 D를 출력하라
 * 
 * 그 이외에 점수는 F를 출력하라
 */

function solution(n) {
    switch(true){
        case (n == 100):
            console.log("A+");
            break;
        case (n >= 90):
            console.log("A");
            break;
        case (n >= 80):
            console.log("B");
            break;
        case (n >= 70):
            console.log("C");
            break;
        case (n >= 60):
            console.log("D");
            break;
        default:
            console.log("F");    
    }
}

solution(13); // F
solution(24); // F
solution(48); // F
solution(62); // D
solution(73); // C
solution(33); // F
solution(83); // B
solution(93);  // A
solution(70);  // C
solution(80);  // B
solution(90);  // A
solution(100); // A+