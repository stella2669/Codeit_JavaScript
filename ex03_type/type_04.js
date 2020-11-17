// 형 변환(Type Conversion)
// 산술 연산(+, -, *, /, %, **)
// +는 문자열 연결 기능도 있어 주의!
console.log('4' - true); // 3
console.log(4 + '2'); // 42 _ +연산: 어느 한쪽이라도 문자열이면 문자열 연산
console.log(4 + 2); // 6
console.log(4 - true); // 3
console.log(4 * false); // 0
console.log(4 / '2'); // 2
console.log('4' ** true); // 4 _거듭제곱
console.log(4 % 'two'); // NaN _Not a Number

// 관계 비교 연산(<, <=, >, >=)
console.log(2 < '3'); // true
console.log(2 > true); // true
console.log('2' <= false); // false
console.log('two' >= 1); // false _ 비교가 불가능할떄도 false 출력

// 같음 비교 연산(===, !==, ==, !=)
console.log(1 === '1'); // false _ 일치, 불일치(!==) _ 형변환이 일어나지 않고 타입까지 같은지 확인
console.log(1 === true); // false
console.log(1 == '1'); // true _ 동등, 부등(!=) 형변환이 일어나 같은지 확인
console.log(1 == true); // true

// 값이 같은지 비교할때는 === 을 사용 추천한다.
