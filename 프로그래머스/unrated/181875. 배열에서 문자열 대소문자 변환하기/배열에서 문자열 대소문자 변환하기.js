function solution(strArr) {
    var answer = [];
    for(let i=0;i<strArr.length;i++){
        if(i%2 == 0){ //짝수            
            answer.push(strArr[i].toLowerCase()); //문자열 소문자로
        }else{ //홀수
            answer.push(strArr[i].toUpperCase()); //문자열 대문자로
        }
    }
    return answer;
}