function solution(arr, flag) {
    var answer = [];
    for(let i=0; i<arr.length; i++){ //0부터니깐 = 생략
        if(flag[i] === true){ //추가
            for(let a=0;a<arr[i]*2;a++){ //0부터니깐 = 생략
                answer.push(arr[i]);
            }
        }else{ //삭제
            for(let b=0;b<arr[i];b++){ //0부터니깐 = 생략
                answer.pop();//pop : 마지막요소 삭제
            }
        }
    }
    return answer;
}