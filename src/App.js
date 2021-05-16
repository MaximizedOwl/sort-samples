import './App.css';
import { bubbleSort } from './sort/bubbleSort';
import { insertSort } from './sort/insertSort';
import { selectionSort } from './sort/selectionSort';
import { dataGenerator } from './util/dataGenerator';
import { randomization } from './util/randomization';

function App() {
  const ascNumList = dataGenerator();
  const randomNumList = randomization(ascNumList);

  return (
    <div className='App'>
      <header className='App-header'>
        <h2>ソートのサンプル集</h2>

        {`
          0〜9999の数字をランダムに生成して配列に入れ、それらを並び替える速度を計測したもの。
          ブラウザで更新するたびに配列内の並びは変わる。
          `}

        <h4>バブルソート</h4>
        {bubbleSort(ascNumList, randomNumList)}
        <h4>選択ソート</h4>
        {selectionSort(ascNumList, randomNumList)}
        <h4>挿入ソート</h4>
        {insertSort(ascNumList, randomNumList)}
        <h4>クイックソート</h4>
        {'未実装'}
      </header>
    </div>
  );
}

export default App;
