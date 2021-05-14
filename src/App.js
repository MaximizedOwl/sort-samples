import "./App.css";
import { bubbleSort } from "./sort/bubbleSort";

function App() {
  const firstNumOfBubble = bubbleSort();

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>ソートのサンプル集</h1>
        <p>
          0〜10000の数字をランダムに生成して配列に入れ、それらを並び替える速度を計測したもの。
        </p>
        <p>ブラウザで更新するたびに配列内の並びは変わる。</p>
        <h2>バブルソート</h2>
        {firstNumOfBubble}
        <h2>選択ソート</h2>
        <h2>挿入ソート</h2>
        <h2>クイックソート</h2>
      </header>
    </div>
  );
}

export default App;
