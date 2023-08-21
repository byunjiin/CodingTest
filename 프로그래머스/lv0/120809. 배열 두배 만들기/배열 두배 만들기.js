function solution(numbers) {
    var answer = [];
    let n = numbers.length;
    for(let i=0; i<n; i++){
        answer.push(numbers[i]*2);//answer.push() : 배열에 요소를 넣기
    }
    return answer;
}