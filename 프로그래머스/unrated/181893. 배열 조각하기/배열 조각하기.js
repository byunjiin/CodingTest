function solution(arr, query) {
    for(let i=0;i<query.length;i++){
        if(i%2 ===0){//짝수 인덱스
            arr=arr.slice(0,query[i]+1); //0~i
        }else{//홀수 인덱스
            arr=arr.slice(query[i], ); //i~끝(끝은 빈칸으로)
        }
    }
    return arr;
}