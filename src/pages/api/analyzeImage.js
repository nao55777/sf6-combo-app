// src/api/analyzeImage.js (フロントエンドの通信関数)

export const analyzeImage = async (imageUrl) => {
  // 🚨 注意: バックエンドの API エンドポイントを呼び出します。
  // BaaS（Firebase Functions, AWS Lambda, Next.js API Route など）で
  // AI処理を行うエンドポイントを設定する必要があります。
  const BAAS_API_ENDPOINT = '/api/analyze-image'; 

  const response = await fetch(BAAS_API_ENDPOINT, { 
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    // アップロードされた画像URLをバックエンドに送信
    body: JSON.stringify({ image_url: imageUrl }), 
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ message: '解析中に不明なエラーが発生しました。' }));
    throw new Error(`AI解析に失敗しました: ${errorData.message}`);
  }

  // バックエンドからの AI 解析結果を返す
  return response.json();
};