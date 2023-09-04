function solution(arr) {
    var answer = [];
    let n = 1;
    while (n < arr.length) {
        n *= 2;
    }
    if(arr.length/n != 0){
       answer = arr.concat(new Array(n-arr.length).fill(0));
    }else{
        answer.push(arr);
    }
    return answer;
}