function solution(arr) {
    let stk=[];
    for(let i=0; i<arr.length; i++){
        if(stk.length==0){ //0
            stk.push(arr[i]);
        }else if(stk.slice(-1)==arr[i]){ //stk마지막=arr[i]
            stk.pop();
        }else if(stk.slice(-1)!=arr[i]){ //stk마지막 != arr[i]
            stk.push(arr[i]);
        }
    }
    return stk.length==0?[-1]:stk;
}