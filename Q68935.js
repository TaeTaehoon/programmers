// 자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// n은 1 이상 100,000,000 이하인 자연수입니다.
// 입출력 예
// n	result
// 45	7
// 125	229

function solution(n) {
  let startNum = n;
  const col3 = [];
  let result = 0;
  while (true) {
    if (startNum < 3) {
      col3.push(startNum);
      break;
    }
    col3.push(startNum % 3);
    startNum = Math.floor((startNum /= 3));
  }

  for (i = 0; i <= col3.length - 1; i++) {
    result += col3[i] * Math.pow(3, col3.length - 1 - i);
  }

  return result;
}
