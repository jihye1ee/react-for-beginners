import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import App2 from './App2';
// import "./style.css"; → 📌 ① 모든 버튼의 배경은 검정색, 글자는 흰색이 됨

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <App2 />
  </React.StrictMode>
);
