import { useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  // create react app을 사용하기 때문에 React.useState(0);라고 적지 않아도 됨 그냥 useState만 import 해 줄 수 있음
  const onClick = () => setValue((prev) => prev + 1);

  console.log("render");
  /*
    지금은 내 state가 변할 때마다 매번 상단 console.log는 실행됨
    -> 업데이트된 value 값을 볼 수 있는데 그 이유는 state가 변화할 때 모든 컴포넌트, 모든 코드는 다시 실행되기 때문임

    그러나 가끔은 한 번만 실행하고 그 뒤로는 다시 실행하고 싶지 않을 수도 있음
    -> 첫 번째 render에만 코드가 실행되고, 다른 state 변화에는 실행되지 않도록

    ex) API를 통해 데이터를 가져올 때 컴포넌트 렌더에서 API를 부르고 이후 state가 변화할 때 그 API에서 데이터를 다시 가져오지 않게 만들 수 있음
  */

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
