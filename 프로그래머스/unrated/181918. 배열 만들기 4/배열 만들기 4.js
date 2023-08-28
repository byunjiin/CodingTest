function solution(arr) {
    var stk = [];
    var i=0;
   while(i<arr.length){//i가 arr의 길이보다 작을때
        if(stk == 0){ //stk가 빈배열
            stk.push(arr[i]);
            i++;
        }else if(stk[stk.length-1]<arr[i]){ //stk에 원소있고 마지막원소가 arr[i]보다 작을때
                stk.push(arr[i]);
                i++;
        }else{ //stk에 원소있고 마지막원소가 arr[i]보다 클때
                stk.pop();
            }
        }
    return stk;
}