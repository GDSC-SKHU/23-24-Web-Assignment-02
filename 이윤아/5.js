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


//if-else 문을 이용해 문제를 품.
function solution(n) { //n == 받은점수.
    if (n === 100) {
        console.log("A+"); 
    } else if (n >= 90) {  
        console.log("A");
    } else if (n >= 80) { 
        console.log("B");
    } else if (n >= 70) { 
        console.log("C");
    } else if (n >= 60) {
        console.log("D");
    } else {
        console.log("F");
    }
}

solution(13);   
solution(24);   
solution(48);   
solution(62);  
solution(73);   
solution(33);   
solution(83);   
solution(93);  
solution(70);   
solution(80);  
solution(90);   
solution(100);  
