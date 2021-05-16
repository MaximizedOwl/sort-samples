import { check } from '../util/check';
import { randomNumberGenerator } from '../util/randomNumberGenerator';

export const insertSort = () => {
  const randomNumList = randomNumberGenerator();

  const startTime = performance.now(); // 開始時間

  /* 
    ソート処理
    小さい順に並び替える。
  */

  // 整列済みの配列を用意
  let SortedList = [];

  // 添字の0をまずは整列済みとみなす
  SortedList.push(randomNumList[0]);

  // randomNumList[1]移行の数の挿入処理開始
  for (let i = 1; i < randomNumList.length; i++) {
    // console.log(SortedList);
    // console.log('i: ' + i);

    // 整列済みの配列の一番大きい数字よりも今回比較する数字が大きいかどうかの判定
    // 整列済みの配列の一番大きい数字よりも今回比較する数字が大きければ、一番右に挿入して次のループへ移行
    if (SortedList[SortedList.length - 1] < randomNumList[i]) {
      SortedList.push(randomNumList[i]);
      continue;
    }

    // 「整列済みの配列の一番大きい数字よりも今回比較する数字が大きいかどうかの判定」でtrueにならなかった場合こちらの処理が走る
    // 適切な位置の判定をする。
    for (let j = 0; j < SortedList.length; j++) {
      // console.log('i: ' + i + ' j: ' + j);

      // 添字0の値から順に比べていって、SortedList[j] の値のほうが大きくなったらその位置を見て挿入する。
      if (SortedList[j] > randomNumList[i]) {
        // 挿入処理
        SortedList.splice(j, 0, randomNumList[i]);
        // 適切な位置が見つかったのでループを抜ける
        break;
      }
    }
  }

  const endTime = performance.now(); // 終了時間

  if (check(SortedList)) {
    console.log('OK! ' + (endTime - startTime));
    return 'OK! ' + (endTime - startTime) + ' (ms)';
  } else {
    return 'NG...!';
  }
};
