import React from "react";
import UploadForm from "./components/UploadForm";

function App() {
  return (
    <div style={{ textAlign: "center", padding: "30px" }}>
      <h1>スト6 AIコンボ解析ツール</h1>
      <p>画像をアップロードしてAIが解析します</p>
      <UploadForm />
    </div>
  );
}

export default App;
