function solution(n) {
    var answer = [];
    //1.숫자(정수형)을 문자열로 변환 -> n.toString()
    //2.문자열을 배열(arr)로 변환 -> var arr=[n.toString()]
    //3.배열 안의 문자열을 조각하기(12345을1,2,3,4,5) 
    //방법1. ... -> var arr=[...(n.toString())]
    //방법2. split -> var arr=[n.toString().split("")]
    //4.배열의 요소를 뒤집어주기
    //방법1.pop,push -> 
    //var a = arr.length;
    //for(let i=0; i<a; i++){
    //     answer.push(arr.pop());
    // }
    //방법2. reverse -> answer = arr.reverse();
    //5.배열의 요소(문자)를 정수로 변환
    //방법1. parseInt(값) -> answer.push(parseInt(arr.pop()))
    //방법2. +(값) ->answer.push(+(arr.pop()))
    var arr=[...(n.toString())];
    var a = arr.length;
    for(let i=0; i<a; i++){
        answer.push(+(arr.pop()));
    }
    return answer;
}