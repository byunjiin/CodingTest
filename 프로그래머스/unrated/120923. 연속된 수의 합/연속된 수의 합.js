function solution(num, total) {
    var answer = [];
    if(num%2==0){ //num이 짝수일때
        for(let i=Math.ceil(total/num)-Math.floor(num/2); i<=Math.ceil(total/num)+Math.floor(num/2)-1; i++){
            // total나누기num을 올림으로 사용했기에, 몫+1값이 중심이 됨
            // 짝수의 경우 중심이 오른쪽으로 1칸이기에 조건문부분에 중심-1을 해줌
            answer.push(i);
        }
    }else{ //num이 홀수일때(먼저코드짜기)
        for(let i=Math.ceil(total/num)-Math.floor(num/2); i<=Math.ceil(total/num)+Math.floor(num/2); i++){
            // Math.ceil //올림
            // Math.floor //내림
            // Math.round //반올림
            // 홀수의 경우 total에서num나눈값의 양옆에 num/2개만큼이 존재
            // total나누기num이 실수일경우를 대비하여 정수로 바꿔주는데, 올림을사용
            answer.push(i);
        }
    }
    return answer;
}