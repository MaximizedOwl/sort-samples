/* 
  昇順の数字の配列の順番のランダム化
*/
export const randomization = (numList) => {
  // ランダム化処理
  for (let i = numList.length; 1 < i; i--) {
    let k = Math.floor(Math.random() * i);
    [numList[k], numList[i - 1]] = [numList[i - 1], numList[k]];
  }

  // わかりやすいように入れ直し
  const randomNumList = numList;

  return randomNumList;
};
