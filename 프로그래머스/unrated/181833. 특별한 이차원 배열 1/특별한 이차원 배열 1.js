//2차원배열을 1차씩 쪼개서 품(answer안에 arr배열)
//n=3이면 answer[arr[] arr[] arr[]]
function solution(n) {
    var answer = [];
        for(let x=0; x<n; x++){ 
            var arr = new Array(n).fill(0); //arr 배열요소를 전부 0채우기
            //2차원을 1차원으로 생각하니 i=j일땐 arr[0],arr[1],arr[2]가 됨
            arr[x] = 1; //1넣기
            answer.push(arr); //완성한 arr배열을 answer안에 넣기
        }
    return answer;
}
