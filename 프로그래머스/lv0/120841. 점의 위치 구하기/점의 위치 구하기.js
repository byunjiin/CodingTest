function solution(dot) {
    let i=dot[0];
    let j=dot[1]
        if(0<i && 0<j){//1사분면
            return 1;
        }else if(i<0 && 0<j){//2사분면
            return 2;
        }else if(i<0 && j<0){//3사분면
            return 3;
        }else{//4사분면
            return 4;
        }
        
}