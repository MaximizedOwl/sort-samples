import { check } from '../util/check';
import { randomNumberGenerator } from '../util/randomNumberGenerator';

export const selectionSort = () => {
  const randomNumList = randomNumberGenerator();

  const startTime = performance.now(); // 開始時間

  /* 
    ソート処理
    （最小から整列させる）
  */

  // 暫定での最小値が入っている配列の添字を入れるための変数
  let tmpMinIndex;

  // 一回交換が終わったら次の値に移る。
  // 最小値から並べる場合、最後の値は自動的に最大値になるので繰り返す数は (要素数 - 1) になる。
  for (let i = 0; i < randomNumList.length; i++) {
    tmpMinIndex = i;

    // console.log('ループ前 tmpMinIndex: ' + tmpMinIndex);

    for (let j = i; j < randomNumList.length; j++) {
      // jに入っている値が一時変数に入っている添字の値より小さければ一時変数に入る添字の変更実施
      if (randomNumList[tmpMinIndex] > randomNumList[j]) {
        tmpMinIndex = j;
      }
    }

    // console.log('ループ後 tmpMinIndex: ' + tmpMinIndex);

    const tmp = randomNumList[tmpMinIndex];
    randomNumList[tmpMinIndex] = randomNumList[i];
    randomNumList[i] = tmp;

    // console.log('sort: ' + (i + 1) + '回目： ' + randomNumList);
  }

  const endTime = performance.now(); // 終了時間

  if (check(randomNumList)) {
    console.log('OK! ' + (endTime - startTime));
    return 'OK! ' + (endTime - startTime) + ' (ms)';
  } else {
    return 'NG...!';
  }
};
