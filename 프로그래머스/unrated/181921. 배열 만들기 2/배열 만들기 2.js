function solution(l, r) {
    const answer = [];

    for (let num = l; num <= r; num++) {
        if(num == 0){ //제한사항이 1부터니깐
            continue
        }
        const numStr = num.toString();

        if (/^[05]+$/.test(numStr)) { //정규화,test()
            answer.push(num);
        }
    }

    return answer.length === 0 ? [-1] : answer; //삼항연산자
}