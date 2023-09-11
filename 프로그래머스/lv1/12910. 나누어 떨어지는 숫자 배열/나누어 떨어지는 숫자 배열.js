function solution(arr, divisor) {
    answer = arr.filter(v => v % divisor == 0).sort((a, b) => a - b)
    return answer.length? answer : [-1];
}