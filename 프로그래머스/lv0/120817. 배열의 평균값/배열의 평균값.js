function solution(numbers) {
    var arr = numbers.reduce((a,b)=>{return a += b},0) //reduce를 사용하여 요소의 합구하기
    var answer = arr/numbers.length; // 요소합/요소갯수로 평균구하기
    return answer;
    
}