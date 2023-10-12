function count(s) {
        let x = s[0]; //배열의 첫요소
        let same = 0;
        let dif = 0;
        
        for (let i = 0; i < s.length; i++) {
            if (s[i] === x) {
                same++;
            } else {
                dif++;
            }
            
            if (same === dif) {
                break;
            }
        }
        
        return { same, dif }; //구조분해할당
    }

function solution(s) { //처음
    let answer = [];
    
    while (s.length > 0) {
        let { same, dif } = count(s); //same,dif가 있는 count함수로 감->돌아와선 return{same,dif}를 받음
        answer.push(s.slice(0, same + dif)); //ba
        s = s.slice(same + dif); //slice(a)는 (a,)와 같음 뒷부분을 생략 nana
    }
    
    return answer.length; //끝
}