function solution(my_string) {
    var answer = [];
    for(let i=1; i<my_string.length+1; i++){
        answer.push(my_string.slice(-i)); 
        //slice(-숫자) : 뒤에있는것부터 출력
        //slice(-1) = "a", slice(-2) = "na" ... slice(-6) = "banana"
    }   
    return answer.sort(); //사전순으로 정렬 (a-z)
}