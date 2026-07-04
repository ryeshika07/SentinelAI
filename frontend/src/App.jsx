import { useEffect, useState } from "react";
import api from "./api/api";

function App() {
  const [status, setStatus] = useState("checking");
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .get("/health")
      .then((res) => {
        setStatus(res.data.status);
      })
      .catch((err) => {
        setStatus("unreachable");
        setError(err.message);
      });
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>SentinelAI</h1>
      <p>
        Backend status: <strong>{status}</strong>
      </p>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
    </div>
  );
}

export default App;
