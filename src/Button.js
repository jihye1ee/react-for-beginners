import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({text}) {
  return <button className={styles.btn}>{text}</button>;
}

/*
  function Button({text}) {
    return <button style={{
      backgroundColor: "#000",
      color: "#fff"
    }}>{text}</button>;
  }
  → 📌 ② 이렇게 직접적으로 style을 넣어 줄 수도 있지만 css 파일의 힘을 잃음

  📌 ④ create-react-app은 이 CSS 코드를 자바스크립트 객체로 변환시켜 줌
*/

Button.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Button; // App.js에서 Button을 가져올 수 있게 하고 싶어 내보냄

/*
  (1)
  자바스크립트에서 내보낼 수 있는 요소가 많이 있을 때는 export {내보낼 객체명}으로 골라서 내보냄
  export default는 내보낼 요소가 하나만 있을 때 사용

  export는 객체의 이름을 유지한 상태로 내보냄
  export default는 객체의 이름을 임의로 설정할 수 있음

  (2) create-react-app
  - 리액트 애플리케이션을 만드는 최고의 방식
  - create-react-app으로 서로 다른 파일들로 코드를 분할하는 등의 작업도 할 수 있게 됨
  - 컴포넌트들이나 스타일들을 독립적이게 유지시켜 줌
  - 무작위적인 랜덤 class를 가짐
*/
