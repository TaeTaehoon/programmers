// 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

// 제한 사항
// n은 0 이상 3000이하인 정수입니다.
// 입출력 예
// n	return
// 12	28
// 5	6

function solution(n) {
  const num = n;
  const sqrt = Math.sqrt(n);
  const set = new Set();
  let result = 0;
  for (i = 1; i <= sqrt; i++) {
    if (n / i === Math.floor(n / i)) set.add(i).add(n / i);
  }
  set.forEach((x) => {
    result += x;
  });

  return result;
}
