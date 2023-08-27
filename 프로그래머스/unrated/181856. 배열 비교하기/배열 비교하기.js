function solution(arr1, arr2) {
    // var answer = 0;
    const a=arr1.length;
    const b=arr2.length;
    if(a<b){
        return -1;
    }else if(a>b){
        return 1;
    }else { // a=b
        if(arr1.reduce((x,y)=>x+y,0) < arr2.reduce((x,y)=>x+y,0)){ //원소합 
            return -1;
        }else if(arr1.reduce((x,y)=>x+y,0) > arr2.reduce((x,y)=>x+y,0)){
            return 1;
        }else{
            return 0;
        }       
    }
    // return answer;
}