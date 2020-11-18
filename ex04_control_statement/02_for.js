// 반복문 (loop statement)

// for 반복문
// for (초기화부분; 조건부분; 추가동작부분){
//   동작부분
// }

// 정석
// i는 로컬 변수라서 {}블록 안에서만 유효하다.
for(let i = 1; i <= 10; i++){
  console.log(`${i} 은지 최고!!`);
}

// 추가동작부분을 꼭 채울 필요는 없다.
for(let i = 1; i <= 10;){
  console.log(`${i} 은지 최고!!`);
  i++;
}
// 초기화 부분도 반드시 채울 필요는 없다.
// for의 ()안에는 반드시 ;; 세미콜론 2개가 들어가야한다.
let i = 1;
for(; i <= 10; i++){
  console.log(`${i} 은지 최고!!`);
}

// 예제 1
for(let i = 1; i <= 50; i++){
  console.log(`${2 * i}`);
}

// 예제 2
function printTriangle(height) {
  let s = '';
	for(let i = 0; i < height; i++){
    s = s + '*'; // s += '*';
    console.log(s);
  }
}

console.log('높이: 1');
printTriangle(1);

console.log('높이: 3');
printTriangle(3);

console.log('높이: 5');
printTriangle(5);



