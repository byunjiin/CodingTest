function solution(numer1, denom1, numer2, denom2) {
    var numer = numer1*denom2 + numer2*denom1; //분자
    var denom = denom1*denom2; //분모
    let minNumber; //최소값
    if(numer < denom) { //분자의수가 분모의수보다 작을때
        minNumber = numer;
    }else{ //분자의수가 분모의수보다 클때
        minNumber = denom;
    }
    
    while(true){
        if(numer % minNumber === 0){//분자 나누어 떨어질때
            if(denom % minNumber === 0){//분모도 나누어 떨어질때
                return [numer/minNumber, denom/minNumber]; //출력
            }
        }
        minNumber = minNumber -1; //1씩감소
    }
}