function solution(arr) {
    let stk=[];
    for(let i=0; i<arr.length; i++){
        if(stk.length==0){ //stk이 빈배열
            stk.push(arr[i]);
        }else if(stk.slice(-1)==arr[i]){ //stk마지막=arr[i]
            stk.pop();
        }else if(stk.slice(-1)!=arr[i]){ //stk마지막 != arr[i]
            stk.push(arr[i]);
        }
    }
    return stk.length==0?[-1]:stk; //종료시 stk이 빈배열이면 [-1]반환, stk이 값이 있으면 그 값을 반환
}
