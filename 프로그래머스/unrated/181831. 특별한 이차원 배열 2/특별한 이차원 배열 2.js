//배열의 기본 리턴값을 1로 지정하고, 조건이 거짓일경우 0으로 반환
//예시 참 : a[0][1]=1 a[1][0]=1 ->return 1
//예시 거짓 : a[0][1]=1 a[1][0]=3 ->return 0
function solution(arr) {
    var answer = 1;
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length; j++){
            if(arr[i][j] != arr[j][i]){
                answer = 0;
            }
        }
    }
    return answer;
}
