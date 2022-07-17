// 두 정수 left와 right가 매개변수로 주어집니다. left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ left ≤ right ≤ 1,000
// 입출력 예
// left	right	result
// 13	17	43
// 24	27	52

function solution(left, right) {
  const min = left;
  const max = right;
  let result = 0;
  for (i = min; i <= max; i++) {
    const num = i;
    const middle = Math.sqrt(i);
    let count = 0;

    for (j = 1; j <= middle; j++) {
      if (j === middle) {
        count += 1;
      } else if (num / j === Math.floor(num / j)) {
        count += 2;
      }
    }
    count / 2 === Math.floor(count / 2) ? (result += num) : (result -= num);
  }

  return result;
}
