function solution(my_string, n) { 
    var answer = ''; //문자열
    answer += my_string.slice(0,n); //slice(처음,끝) 끝은 하나 적게 나옴 
    return answer;
}