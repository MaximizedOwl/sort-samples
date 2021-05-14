// 1~10000までの配列を生成
const number = 10000;
let ascNumList = [];

export const check = (sortedList) => {
  for (let index = 0; index < number; index++) {
    ascNumList.push(index);
  }

  /* 
    昇順にソートしているかの判定
    成功：true
    失敗：false
  */

  for (let index = 0; index < number.length; index++) {
    if (!(ascNumList[index] === sortedList[index])) {
      return false;
    }
  }

  return true;
};
