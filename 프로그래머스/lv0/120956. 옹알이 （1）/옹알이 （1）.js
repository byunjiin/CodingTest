function solution(babbling) {
    let answer = 0;
    let b = '';
    const dic = ["aya", "ye", "woo", "ma"];
    
    for (let i = 0; i < babbling.length; i++) {
        b = babbling[i];
        
        for (let j = 0; j < dic.length; j++) {
            b = b.replace(dic[j], '_');
            
            if (b.replace(/_/g, '') === '') {
                answer += 1;
                break;
            }
        }
    }
    return answer;
}