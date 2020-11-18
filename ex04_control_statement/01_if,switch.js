// if문 (if statement)
// if (조건부분) {
//   동작부분
// } else if (조건부분) {
//   동작부분
// } else {
//   동작부분
// }

let temperature = 0;

if (temperature <= 0) {
  console.log('물이 업니다.');
} else if (temperature < 100) {
  console.log('물이 얼지도 끓지도 않습니다.');
} else {
  console.log('물이 끓습니다.');
}

// if, else 예제
function checkHeight(height) {
  if (height >= 140) {
    console.log(`탑승이 가능합니다.`);
  } else {
    console.log(`탑승이 불가능합니다.`);
  }
}

checkHeight(141); // 탑승이 가능합니다.
checkHeight(135); // 탑승이 불가능합니다.
checkHeight(170); // 탑승이 가능합니다.

// if, else if, else 예제 1
function printGrade(midtermScore, finalScore) {
  let totalScore = midtermScore + finalScore;
  if (totalScore >= 90) {
    console.log(`A`);
  } else if (totalScore >= 80) {
    console.log(`B`);
  } else if (totalScore >= 70) {
    console.log(`C`);
  } else if (totalScore >= 60) {
    console.log(`D`);
  } else {
    console.log(`F`);
  }
}

printGrade(25, 35);
printGrade(50, 45);
printGrade(29, 24);
printGrade(37, 42);

// if, else if, else 예제 2
let myAge = 26;
let myGender = 'male';

// 호칭을 담은 변수
let callOlderBrother = '형';
let callOlderSister = '누나';
let callFriend = '친구';
let callYoungerSister = '여동생';
let callYoungerBrother = '남동생';

// 상대방의 나이와 성별에 따른 호칭을 리턴하는 함수 whatShouldICall를 완성하세요.
function whatShouldICallYou(yourAge, yourGender) {
  if (myAge === yourAge) {
    return console.log(`친구`);
  } else if (myAge < yourAge) {
    if (yourGender === 'male') {
      return console.log('형');
    } else {
      return console.log('누나');
    }
  } else {
    if (yourGender === 'male') {
      return console.log('남동생');
    } else {
      return console.log('여동생');
    }
  }
}
// 테스트 코드
let result1 = whatShouldICallYou(25, 'female');
let result2 = whatShouldICallYou(20, 'male');
let result3 = whatShouldICallYou(26, 'female');
let result4 = whatShouldICallYou(30, 'male');
let result5 = whatShouldICallYou(31, 'female');

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);

// switch문 (switch statement) 예제
let VIPPrice = 15;
let RPrice = 13;
let SPrice = 10;
let APrice = 8;

function checkPrice(grade) {
  switch (grade) {
    case 'VIP':
      console.log(`${grade}석은 ${VIPPrice}만원 입니다.`);
      break;
    case 'R':
      console.log(`${grade}석은 ${RPrice}만원 입니다.`);
      break;
    case 'S':
      console.log(`${grade}석은 ${SPrice}만원 입니다.`);
      break;
    case 'A':
      console.log(`${grade}석은 ${APrice}만원 입니다.`);
      break;
    default:
      console.log(`VIP, R, S, A 중에서 하나를 선택해 주세요.`);
  }
}

checkPrice('R');
checkPrice('VIP');
checkPrice('S');
checkPrice('A');
checkPrice('B');