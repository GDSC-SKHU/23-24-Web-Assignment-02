/*function solution(n){
for(let i = 1, j = 0; i < n+1; i++){
    console.log(" ".repeat(n - i) + "*".repeat(i + j));
    j = j +1
    
}
}
solution(5)*/

function solution(n){
for(let i=0; i < n; i++){
    for(let j = 0; j < n - i; j++){
        process.stdout.write(" ");
    }
    for(let k = 0; k < 2*i+1; k++)
    {
        process.stdout.write("*");
    }
    console.log(" ")
}
}
solution(3);
solution(5);
