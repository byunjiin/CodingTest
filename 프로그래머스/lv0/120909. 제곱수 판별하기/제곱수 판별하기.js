function solution(n) {
    return Number.isInteger(n**(1/2)) ? 1 : 2; //n의 루트값이 정수면 1, 아니면 2 반환
}
