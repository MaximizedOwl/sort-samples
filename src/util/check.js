/* 
  昇順にソートできているかの判定
  成功：true
  失敗：false
*/
export const check = (correctNumList, sortedList) => {
  for (let index = 0; index < correctNumList.length; index++) {
    // indexを添字としたときの、昇順リスト（正解）の値とチェック対象の値を突き合わせて、falseになる場合に分岐に入る判定
    if (!(correctNumList[index] === sortedList[index])) {
      return false;
    }
  }

  return true;
};
