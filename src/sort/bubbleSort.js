import { check } from '../util/check';
import { randomNumberGenerator } from '../util/randomNumberGenerator';

export const bubbleSort = () => {
  const randomNumList = randomNumberGenerator();

  const startTime = performance.now(); // 開始時間

  /* 
    ソート処理
  */
  // (要素数 - 1) 回分、繰り返す
  for (let i = 0; i < randomNumList.length - 1; i++) {
    // (要素数 - 1) 回分、繰り返す
    for (let j = 0; j < randomNumList.length - 1; j++) {
      // 入れ替えるかどうかの判定。添字が大きいほうが中の数字が小さければswap処理実施。
      if (randomNumList[j] > randomNumList[j + 1]) {
        // 添字の大きい数字を一時変数に入れて入れ替える。
        const tmp = randomNumList[j];
        randomNumList[j] = randomNumList[j + 1];
        randomNumList[j + 1] = tmp;
      }
    }
  }

  const endTime = performance.now(); // 終了時間

  if (check(randomNumList)) {
    console.log('List is... ' + randomNumList);
    console.log('OK! ' + (endTime - startTime));
    return 'OK! ' + (endTime - startTime) + ' (ms)';
  }
};
