import { useState, useEffect } from "react";
/*
  [useEffect]
  - 두 개의 argument를 가지는 함수
    → 첫 번째 argument: 우리가 한 번만 실행하고 싶은 코드
  - 코드가 한 번만 실행될 수 있도록 보호해 주기 때문에 사용함
    → React JS는 우리에게 언제 코드를 실행할지 안 할지 결정할 tool을 제공
*/

function App() {
  const [counter, setValue] = useState(0);
  // create react app을 사용하기 때문에 React.useState(0);라고 적지 않아도 됨 그냥 useState만 import 해 줄 수 있음
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  /*
    💥 ① 이 function이 작동할 때 argument로 event를 받음
    그리고 event를 발생시킨 input(event.target)에서 value(event.target.value)를 받아서 그 value를 "keyword" state에 넣어 줌
  */

  console.log("I run all the time.");
  /*
    지금은 내 state가 변할 때마다 매번 상단 console.log는 실행됨
    → 업데이트된 value 값을 볼 수 있는데 그 이유는 state가 변화할 때 모든 컴포넌트, 모든 코드는 다시 실행되기 때문임

    그러나 가끔은 한 번만 실행하고 그 뒤로는 다시 실행하고 싶지 않을 수도 있음 (특정 코드의 실행을 제한)
    → 첫 번째 render에만 코드가 실행되고, 다른 state 변화에는 실행되지 않도록

    ex) API를 통해 데이터를 가져올 때 컴포넌트 렌더에서 API를 부르고 이후 state가 변화할 때 그 API에서 데이터를 다시 가져오지 않게 만들 수 있음
  */

  /*
    const iRunOnlyOnce = () => {// 컴포넌트가 처음 render 할 때 실행되고 다시는 실행되지 않을 function
      console.log("I run only once.");
    };

    useEffect(iRunOnlyOnce, []);
    // 컴포넌트의 첫 번째 render 시점에서 useEffect가 iRunOnlyOnce 함수 호출
  */

  useEffect(() => {
    console.log("CALL THE API....");
  }, []);
  // 💥 ③ useEffect 덕분에 타이핑 할 때마다 console.log("CALL THE API....");가 실행되지 않음

  /*
    console.log("SEARCH FOR ", keyword);
    🔎 ① 이렇게 하면 button 클릭 시에도 해당 함수가 실행됨
    코드에서 특정한 부분("keyword")만이 변화했을 때 원하는 코드들을 실행하고 싶다면 ↓
  */
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("SEARCH FOR ", keyword);
    }
  }, [keyword]); // 배열 안에 keyword를 넣는 건 이 keyword가 변화할 때 코드를 실행할 거라고 react에게 알려 주는 것임 (빈 배열로 두면 코드가 단 한 번만 실행되는 이유임 → react가 지켜볼 게 아무것도 없기 때문)

  // 여러 개는 아래처럼 적어 줄 수 있음
  useEffect(() => {
    console.log("I run when keyword or counter change.");
  }, [keyword, counter]);

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
      <input type="text" value={keyword} placeholder="Search here..." onChange={onChange} />
    </div>
  );
  // 💥 ② 그리고 그 keyword를 가져와서 input의 value로 사용하면 우리가 원할 때 이 input을 조작할 수 있음
}

export default App;
