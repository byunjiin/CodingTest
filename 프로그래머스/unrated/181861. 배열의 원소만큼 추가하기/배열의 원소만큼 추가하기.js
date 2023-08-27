function solution(arr) {
    var answer = [];
    
    for(n of arr){
        var i=0;
        while(i<n){
            i++;
            answer.push(n);
        }
    }
    return answer;
}