import React, { useState } from "react";

export default function UploadForm() {
  const [testUrl, setTestUrl] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleTestUrl = async () => {
    if (!testUrl) return alert("URLを入力してください");

    setLoading(true);

    try {
      const response = await fetch(
        "https://us-central1-sf6-combo-ai.cloudfunctions.net/analyzeImageApiV2",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            image_url: testUrl,
          }),
        }
      );

      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error(error);
      alert("エラーが発生しました");
    }

    setLoading(false);
  };

  return (
    <div style={{ textAlign: "center", marginTop: 40 }}>
      <h2>URLでAI解析</h2>

      <input
        type="text"
        placeholder="https://example.com/test.jpg"
        value={testUrl}
        onChange={(e) => setTestUrl(e.target.value)}
        style={{ width: "60%" }}
      />
      <br />
      <button onClick={handleTestUrl} disabled={loading}>
        {loading ? "解析中..." : "URLで解析"}
      </button>

      {result && (
        <pre
          style={{
            textAlign: "left",
            background: "#222",
            color: "#0f0",
            padding: "10px",
            marginTop: "20px",
          }}
        >
          {JSON.stringify(result, null, 2)}
        </pre>
      )}
    </div>
  );
}