import { useState } from "react";

function App() {
  const [imageUrl, setImageUrl] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyzeImage = async () => {
    setLoading(true);

    try {
      const res = await fetch(
        "https://us-central1-sf6-combo-ai.cloudfunctions.net/analyzeImageApiV2",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ image_url: imageUrl }),
        }
      );

      const data = await res.json();
      setResult(data);
    } catch (err) {
      console.error(err);
      alert("エラー出た");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>SF6 Combo AI（仮）</h1>

      <input
        type="text"
        placeholder="画像URLを入れて"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        style={{ width: "100%", marginBottom: 10 }}
      />

      <button onClick={analyzeImage} disabled={loading}>
        {loading ? "解析中..." : "解析する"}
      </button>

      {result && (
        <pre style={{ marginTop: 20 }}>
          {JSON.stringify(result, null, 2)}
        </pre>
      )}
    </div>
  );
}

export default App;
