function solution(n) {
    var answer = [];
        for(let a=0; a<n; a++){ 
            var arr = new Array(n).fill(0); //0채우기
            arr[a] = 1; //1넣기 (i=j일때)
            answer.push(arr);
        }
    return answer;
}