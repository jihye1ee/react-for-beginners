import { useState, useEffect } from "react";
/*
  [Cleanup function]
  - 컴포넌트가 destroy될 때 뭔가 할 수 있도록 하는 function
*/

// ✨ 컴포넌트는 단지 jsx를 부르는 function일 뿐임을 잊지 말기!
function Hello () {
  /*
    ① Hello 컴포넌트가 생성될 때 hiFn 실행됨
    ② Hello 컴포넌트가 언제 파괴될지 알고 싶으면 hiFn에서 byeFn을 return해 주어야 함

    function byeFn () {
      console.log("bye :(");
    }
    function hiFn () {
      console.log("hi :)");

      return byeFn;
    }

    useEffect(hiFn, []);
  */

  useEffect(() => {
    console.log("hi :)");

    // Cleanup function
    return () => console.log("bye :(");
  }, []);

  return <h1>Hello</h1>;
}

function App2 () {
  const [showing, setShowing] = useState(false);
  const onClick = () => {setShowing((prev) => !prev)};

  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
  // ✨ return 안에 자바스크립트 쓸 때 {} 쓰는 것 잊지 말기!
}

export default App2;
