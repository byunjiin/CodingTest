function solution(my_str, n) {
    var answer = [];
    for(let a=1; a<=Math.ceil(my_str.length/n); a++){ //MAth.ceil() : 소숫점 올림 함수
        let b = my_str.slice( (a-1)*n , ((a-1)*n)+(n) ) //(0,5) (6,11) (12,17)
        answer.push(b);
    }
    return answer;
}