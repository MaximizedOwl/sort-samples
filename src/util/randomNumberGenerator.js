export const randomNumberGenerator = () => {
  // 1~10000までの配列を生成
  let randomNumList = [];

  for (let index = 0; index < 10000; index++) {
    randomNumList.push(index);
  }

  for (let i = randomNumList.length; 1 < i; i--) {
    let k = Math.floor(Math.random() * i);
    [randomNumList[k], randomNumList[i - 1]] = [
      randomNumList[i - 1],
      randomNumList[k],
    ];
  }

  return randomNumList;
};
