import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // ★ App.jsx が src 直下にあることを前提としています

// 必要な場合はCSSをここでインポートします
// import './index.css'; 

// 1. レンダリングの土台（ルート）を作成
ReactDOM.createRoot(document.getElementById('root')).render(
  // 2. 厳格モード（開発中に問題を見つけやすくする機能）で App コンポーネントを囲む
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);