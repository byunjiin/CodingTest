function solution(arr, delete_list) {
    var answer = [];
    answer = arr.filter((n) => !delete_list.includes(n)); 
    //배열이름.filter() : 배열요소만큼 반복
    //((매개변수) => 조건) : function을 생략하여 매개변수를 바로 조건에 대입
    //includes(값) : boolean값으로 변경 (값이 있으면 참,없으면 거짓)
    return answer;
}