import { check } from "../util/check";
import { randomNumberGenerator } from "../util/randomNumberGenerator";

export const bubbleSort = () => {
  const randomNumList = randomNumberGenerator();

  const startTime = performance.now(); // 開始時間

  for (var i = 0; i < randomNumList.length; i++) {
    for (var j = randomNumList.length - 1; j > i; j--) {
      if (randomNumList[j] < randomNumList[j - 1]) {
        var tmp = randomNumList[j];
        randomNumList[j] = randomNumList[j - 1];
        randomNumList[j - 1] = tmp;
      }
    }
  }

  const endTime = performance.now(); // 終了時間

  if (check(randomNumList)) {
    console.log("OK! " + (endTime - startTime));
    return "OK! " + (endTime - startTime) + " (ms)";
  }
};
