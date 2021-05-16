export const dataGenerator = () => {
  // 1~10000までの配列を生成
  const dataSize = 30000;
  let ascNumList = [];

  for (let index = 0; index < dataSize; index++) {
    ascNumList.push(index);
  }

  return ascNumList;
};
