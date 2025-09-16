import React, { useState } from 'react';
import { GEMINI_API_KEY } from './config';

export default function App() {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');

  const generate = async () => {
    if (!GEMINI_API_KEY || GEMINI_API_KEY === "PASTE_YOUR_KEY_HERE") {
      alert("Please paste your Gemini API key in src/config.js");
      return;
    }
    try {
      const res = await fetch("/.netlify/functions/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt })
      });
      const data = await res.json();
      setResult(data.output || JSON.stringify(data));
    } catch (err) {
      setResult("Error: " + err.message);
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Personal AI App Builder</h1>
      <textarea
        rows="4"
        style={{ width: "100%", marginBottom: "1rem" }}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Describe the app you want to build..."
      />
      <button onClick={generate}>Generate</button>
      <pre style={{ marginTop: "1rem", background: "#eee", padding: "1rem" }}>{result}</pre>
    </div>
  );
}
