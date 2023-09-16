function solution(array) {
    var answer = 0;
    let maxcount = 0;
    let count = {}; //빈 딕셔너리
    //1.count 딕셔너리 만들기
    for(let i=0; i<array.length; i++){
        const a = array[i]; //a에 배열의 요소를 저장
        if(count[a]){ //조건 : count[a]는 키, true면(=딕셔너리의 값이 있다면) if문 실행
            count[a]++;
        }else{ //count[a]를 처음할땐 다 빈 딕셔너리니깐 else문 실행
            count[a] =1;
        }
    }
    //2.count를 이용하여 최빈값 구하기
    for(let j in count){ //for(in)은 for(of)와 같은 쓰임이지만 딕셔너리에선 in으로 사용
        if(count[j] > maxcount){ //count의 값 > maxcount인지 비교
            maxcount = count[j]; 
            answer = +j; //정수형으로 바꾸기 위해서 +j
        }else if(count[j] === maxcount){ //count의 값 = maxcount인지 비교
            answer = -1; 
        }
    }
    return answer;
}