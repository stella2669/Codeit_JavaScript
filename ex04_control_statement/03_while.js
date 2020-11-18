// while문 (while statement)
let i = 1;

while( i <= 10){
  console.log('${i} 은지 최고!!');
  i++;
}

let i = 30; // 글로벌 변수 
while (i % 7 !== 0){ // 7의 배수가 아닐동안 반복하라
  i++;
}
console.log(i); // 35
// 반복문을 종료된 다음에도 변수를 사용해야할 경우 while문 추천!

// 예제 1
let i = 1
while(i <= 100){
  if(i % 2 !== 0){
    console.log(i);
  }
  i++;
}

// 예제 2
const N = 180;
let i = 1;
let count = 0;
while(i <= N){
  if(N % i === 0){
    console.log(i);
    count++;
  }
  i++;
}
console.log(`${N}의 약수는 총 ${count}개입니다.`)