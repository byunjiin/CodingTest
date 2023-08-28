function solution(arr, intervals) {
    var answer = [];
    for (i of intervals) {
        var j = i[0]; //intervals의 첫요소(=arr의 시작값)
        var k = i[1];  //intervals의 끝요소(=arr의 마지막값)
        answer.push(arr.slice(j, k+1)); //slice는 끝요소-1까지 반환하기때문에 k+1로 쓰기
        //arr.slice로 나온 요소를 answer배열에 넣기 
    }
    return answer.flat(); //2차원->1차원배열
}