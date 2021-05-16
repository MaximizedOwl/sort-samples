/* 
  1~10000までの配列を生成
*/
const number = 10000;
let ascNumList = [];

for (let index = 0; index < number; index++) {
  ascNumList.push(index);
}

/* 
  昇順にソートできているかの判定
  成功：true
  失敗：false
*/
export const check = (sortedList) => {
  for (let index = 0; index < ascNumList.length; index++) {
    // indexを添字としたときの、昇順リスト（正解）の値とチェック対象の値を突き合わせて、falseになる場合に分岐に入る判定
    if (!(ascNumList[index] === sortedList[index])) {
      return false;
    }
  }

  return true;
};
