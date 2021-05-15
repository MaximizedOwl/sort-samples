import { check } from '../util/check';
import { randomNumberGenerator } from '../util/randomNumberGenerator';

export const insertSort = () => {
  const randomNumList = randomNumberGenerator();

  const startTime = performance.now(); // 開始時間

  /* 
    ソート処理
  */

  const endTime = performance.now(); // 終了時間

  if (check(randomNumList)) {
    console.log('OK! ' + (endTime - startTime));
    return 'OK! ' + (endTime - startTime) + ' (ms)';
  }
};
