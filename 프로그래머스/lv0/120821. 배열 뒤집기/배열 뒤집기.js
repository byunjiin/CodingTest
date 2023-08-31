function solution(num_list) {
    var answer=[];
    const a = num_list.length;
    for(let i=0; i<a; i++){
        answer.push(num_list.pop());
    }
    return answer;
}