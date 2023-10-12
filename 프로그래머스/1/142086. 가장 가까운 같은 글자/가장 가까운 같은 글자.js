function solution(s) {
    let answer = [];
    let x = [];

    for (let i = 0; i < s.length; i++) {
        if (!x.includes(s[i])) {
            answer.push(-1);
        } else {
            let lastIndex = x.lastIndexOf(s[i]);
            answer.push(i - lastIndex);
        }
        x.push(s[i]);
    }

    return answer;
}